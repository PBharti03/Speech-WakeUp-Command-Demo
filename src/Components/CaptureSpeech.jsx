import React, { useCallback, useEffect, useRef, useState } from "react";

import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

export default function CaptureSpeech({ onCommand, onReset, onStatus }) {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const [lastCommand, setLastCommand] = useState('');
  const inactivityTimeoutRef = useRef(null);
  const endOfCommandTimerRef = useRef(null);
  const lastTranscriptRef = useRef('');

  const clearTimers = useCallback(() => {
    if (inactivityTimeoutRef.current)
      clearTimeout(inactivityTimeoutRef.current);
    if (endOfCommandTimerRef.current)
      clearTimeout(endOfCommandTimerRef.current);
    inactivityTimeoutRef.current = null;
    endOfCommandTimerRef.current = null;
  }, []);

  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimeoutRef.current)
      clearTimeout(inactivityTimeoutRef.current);
    inactivityTimeoutRef.current = setTimeout(() => {
      onStatus &&
        onStatus('No speech detected for 5s — resetting to wakeUp listener');

      clearTimers();
      SpeechRecognition.abortListening();

      onReset && onReset();
    }, 5000);
  }, [clearTimers, onStatus, onReset]);

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      onStatus && onStatus('This Browser does not support SpeechRecognition');
      onReset && onReset();
      return;
    }

    resetTranscript();
    setLastCommand('');
    onStatus && onStatus('Speak Command now!!!');

    SpeechRecognition.startListening({
      continuous: true,
      interimResults: true,
    });

    resetInactivityTimer();

    return () => {
      clearTimers();
      SpeechRecognition.stopListening();
    };
  }, [
    browserSupportsSpeechRecognition,
    onStatus,
    onReset,
    resetInactivityTimer,
    clearTimers,
  ]);

  useEffect(() => {
    if (transcript === lastTranscriptRef.current) return;
    resetInactivityTimer();
    if (endOfCommandTimerRef.current)
      clearTimeout(endOfCommandTimerRef.current);
    endOfCommandTimerRef.current = setTimeout(() => {
      const text = transcript.trim();

      if (text) {
        onStatus && onStatus(`Command captured: "${text}"`);
        onCommand && onCommand(text);
        setLastCommand(text);
        setTimeout(() => {
          resetTranscript();
          lastTranscriptRef.current = '';
        }, 0);
      }
    }, 1500);

    lastTranscriptRef.current = transcript;
    return () => {
      if (endOfCommandTimerRef.current)
        clearTimeout(endOfCommandTimerRef.current);
    };
  }, [transcript, onCommand, onStatus, resetInactivityTimer]);

  return (
    <>
      <div className="voice-command card p-3 border-success">
              <p className="lead text-success">Command Mode Active</p>     {' '}
        <div className="alert alert-light p-2 mb-2">
          Live Transcription: {transcript || '(listening...)'}
        </div>
             {' '}
        <div className="alert alert-secondary p-2">
          Last Captured Command: {lastCommand || '(none)'}
        </div>
           {' '}
      </div>
    </>
  );
}
