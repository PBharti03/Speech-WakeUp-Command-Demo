import React, { useEffect } from "react";

import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

const WAKE_PHRASES = ['hey app', 'hello app'];

export default function WakeUpCommand({ onWake, onStatus, enabled = true }) {
  let {
    transcript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      onStatus &&
        onStatus(
          'This Browser does not support SpeechRecognition. Update or change the Browser'
        );
      return;
    }

    if (!enabled) {
      SpeechRecognition.abortListening();
      return;
    }

    resetTranscript();
    onStatus && onStatus('WakeUp given listener started');
    SpeechRecognition.startListening({
      continuous: true,
      interimResults: true,
    });

    return () => {
      SpeechRecognition.stopListening();
    };
  }, [enabled]);

  useEffect(() => {
    if (!transcript) return;
    let lower = transcript.toLowerCase();
    onStatus && onStatus('Listening for wakeUp word...');

    for (let phrase of WAKE_PHRASES) {
      if (lower.includes(phrase)) {
        SpeechRecognition.abortListening();
        onStatus && onStatus(`WakeUp phrase detected: "${phrase}"`);
        onWake && onWake(phrase);
        resetTranscript();
        return;
      }
    }
  }, []);

  return (
    <div className="card p-3 border-warning">
            <p className="lead text-warning">Give WakeUp Command to Activate</p>
      <div className="alert alert-light">
        Say one of the wake words: "hey app" or "hello app"
      </div>
           {' '}
      <div>
                Mic :{' '}
        {enabled ? (
          listening ? (
            <span className="text-success fw-bold">LISTENING</span>
          ) : (
            'starting'
          )
        ) : (
          'DISABLED'
        )}
             {' '}
      </div>
         {' '}
    </div>
  );
}
