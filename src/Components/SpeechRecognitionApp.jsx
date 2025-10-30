import CaptureSpeech from "./CaptureSpeech";
import React, { useCallback, useState } from "react";
import ResultDisplay from "./ResultDisplay";
import WakeUpCommand from "./WakeUpCommand";

export default function SpeechRecognitionApp() {
let [isAwake, setIsAwake] = useState(false);
let [wakePhrase, setWakePhrase] = useState('');
let [commands, setCommands] = useState([]);
let [status, setStatus] = useState('Idle');

let handleWake = useCallback((phrase) => {
setIsAwake(true);
setWakePhrase(phrase);
setStatus(`Wake word detected — ${phrase}`);
setCommands([]);
}, []);

  let handleCommand = useCallback((text) => {
    setCommands((prev) => [...prev, text]);
    setStatus('Captured command');
  }, []);

  let handleReset = useCallback(() => {
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
