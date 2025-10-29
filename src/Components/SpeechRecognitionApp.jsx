import CaptureSpeech from "./CaptureSpeech";
import React, { useCallback, useState } from "react";
import ResultDisplay from "./ResultDisplay";
import WakeUpCommand from "./WakeUpCommand";

export default function SpeechRecognitionApp() {
const [isAwake, setIsAwake] = useState(false);
const [wakePhrase, setWakePhrase] = useState('');
const [commands, setCommands] = useState([]);
const [status, setStatus] = useState('Idle');

const handleWake = useCallback((phrase) => {
setIsAwake(true);
setWakePhrase(phrase);
setStatus(`Wake word detected — ${phrase}`);
setCommands([]);
}, []);

  const handleCommand = useCallback((text) => {
    setCommands((prev) => [...prev, text]);
    setStatus('Captured command');
  }, []);

  const handleReset = useCallback(() => {
    setIsAwake(false);
    setStatus('Reset to wake listener (idle)');
  }, []);

  return (
    <>
      <section className="container-fluid m-auto">
        <div className="row m-auto text-center">
          <div className="col-12 col-lg-6 mb-4">
                    {isAwake ? (
                        <CaptureSpeech 
                            onCommand={handleCommand} 
                            onReset={handleReset} 
                            onStatus={setStatus} 
                        />
                    ) : (
                        <WakeUpCommand
                            onWake={handleWake}
                            onStatus={setStatus}
                            enabled={!isAwake} 
                        />
                    )}
                </div>

                <div className="col-12 col-lg-6">
                    <ResultDisplay 
                        wakePhrase={wakePhrase} 
                        commands={commands} 
                        status={status} 
                    />
                </div>
        </div>
      </section>
    </>
  );
}
