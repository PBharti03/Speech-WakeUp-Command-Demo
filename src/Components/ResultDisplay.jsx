import React from "react";

export default function ResultDisplay({ wakePhrase, commands, status }) {
  return (
    <>
      <div className="result-display">
        <div className="status">Status: {status}</div>

        <h3>Wake Phrase Detected</h3>
        <div className="box">{wakePhrase || '(none yet)'}</div>

        <h3>Captured Commands (this session)</h3>
        <div className="box">
          {commands.length === 0 ? (
            <div className="empty">(no commands yet)</div>
          ) : (
            <ol>
              {commands.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </>
  );
}
