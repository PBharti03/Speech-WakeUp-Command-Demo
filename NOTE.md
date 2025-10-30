# 🗣️ Voice WakeUp & Command Web App

This app shows how a browser-based voice interface can:

Listen for a wake phrase (e.g. “Hey App”),

Then capture and display short spoken commands,

And reset automatically after a few seconds of silence.

It's a simple example using the Web Speech API in React, looking at the good and bad of this kind of app, its limits, and what it needs from other services.

# Design Choices

1. Library: react-speech-recognition 
    it give access to the browser’s built-in SpeechRecognition API.
2. Wake Word Handling: react-speech-recognition commands
    The library's command feature helps set the wake phrase (hey assistant, hey app, etc.). It's an easy way to handle when it hears the keyword directly within the React setup.
3. Auto-Reset Mechanism: setTimeout
    After a little silence, the web app goes back to sleep, just like other voice assistants. It uses `setTimeout` for this.
4. Functional Component Architecture
    Every feature is separated into its own JSX component for clarity. We also use React hooks for managing the app's state and its lifecycle events— it keeps things simple, functional style (no class components).

# Known Issues & Limitations
1. Browser Incompatibility: This app really relies on the webkitSpeechRecognition setup. It doesn't work properly on few browser
2.  It can get triggered even if it only hears part of the wake phrase in the middle of a sentence.
3. Chrome may pause microphone access after inactivity. And have to give access for microphone explicitly
4. False Command Recognition: While in the "Wake Mode," the recognition engine may sometimes incorrectly process background noise as a command and may or may not process.
5. Listen only to English 

# Third-Party Packages Used

react-->	Core library for building the user interface.

react-dom--> 	Entry point for rendering React components to the DOM.

react-speech-recognition-->	super important: Hook for using the browser's Web Speech API, makes voice recognition simpler. This is the main voice stuff.(useSpeechRecognition)   wrapper around the browser's native Web Speech API, simplifying the entire voice recognition lifecycle. Core speech recognition logic.

create-react-app-->local development server and bundler

# Future Improvements

1. Replace text-based wakeUp detection with audio-level wake-word model
2. Add voice replies (text-to-speech) after command detection.
3. Visual mic indicator (on/off).
4. Multi-language support.