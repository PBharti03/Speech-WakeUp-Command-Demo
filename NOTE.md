# 🗣️ Voice WakeUp & Command Web App

This app demonstrates how a browser-based voice interface can:

Listen for a wake phrase (e.g. “Hey App”),

Then capture and display short spoken commands,

And reset automatically after a few seconds of silence.

It’s a lightweight proof-of-concept using the Web Speech API through React,trade-offs, limitations, and third-party dependencies for the Voice WakeUp & Command Web App.

# Design Choices

1. Library: react-speech-recognition 
    it give access to the browser’s built-in SpeechRecognition API.
2. Wake Word Handling: react-speech-recognition commands
    The library's commands feature is used to define the wake phrase ("hey assistant," "hey app," etc.). This is a declarative, clean way to handle keyword detection directly within the React state.
3. Auto-Reset Mechanism: setTimeout
    After few seconds of silence, the web app resets to wake mode and also provides a natural, hands-free return to the low-power "Sleep Mode," mimicking the behavior of commercial voice assistants.
4. Functional Component Architecture
    Every feature is separated into its own JSX component for clarity. Also have used React hooks for state and lifecycle handling — simple, functional style (no class components).

# Known Issues & Limitations
1. Browser Incompatibility: The app currently relies heavily on the webkitSpeechRecognition implementation. It doesn't work properly on few browser
2. Wake detection can false-trigger if the phrase is partially recognized mid-sentence.
3. Chrome may pause microphone access after inactivity. And have to give access for microphone explicitly
4. False Command Recognition: While in the "Wake Mode," the recognition engine may sometimes incorrectly process background noise as a command and may or may not process.
5. Listen only to English 

# Third-Party Packages Used

react-->	Core library for building the user interface.
react-dom--> 	Entry point for rendering React components to the DOM.
react-speech-recognition-->	Critical: Provides a convenient React Hook (useSpeechRecognition)   wrapper around the browser's native Web Speech API, simplifying the entire voice recognition lifecycle. Core speech recognition logic.
create-react-app-->local development server and bundler

# Future Improvements

1. Replace text-based wakeUp detection with audio-level wake-word model
2. Add voice feedback (text-to-speech) after command detection.
3. Visual mic indicator (active/inactive).
4. Multi-language support.