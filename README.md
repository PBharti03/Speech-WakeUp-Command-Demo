# 🗣️ Voice WakeUp & Command Web App

This is a simple web app that brings voice control to your browser with your voice! It's built with the common web frameworks using React and uses a clever library to access your browser's built-in voice recognition feature.

# What It Does

1. It quietly listens in the background for a wake phrase like “hey app” or “hello app”
2. When it hears you, it perks up and listens for commands.
3. You can say some short commands (like “turn on the light” or “what’s the weather”).
4. After a few seconds of silence (about 5), it goes back to sleep mode, waiting for your next “hey app.”

# How to Run It

1. Make sure you have Node.js and npm installed.
2. Create a new React app (or clone this repo).
3. Open the project in VS Code or your favorite editor.
4. Install the only dependency you need:

npm install react-speech-recognition

5. Start the app:

npm start

6. Open your browser and go to to `http://localhost:3000`.

This application works best in Google Chrome or Microsoft Edge, since they have the most reliable voice recognition support. I have checked in these two.

# Project Structure

src/
├── App.jsx # Main app logic
├── components/
├ ├── SpeechRecognitionApp.jsx # All other components are pushed here
│ ├── WakeListener.jsx # Listens for wakeUp phrase
│ ├── VoiceCommandInput.jsx # Captures other voice commands
│ └── ResultDisplay.jsx # Displays wake phrase and captured commands
├── index.js # Entry point
└── index.css # Basic styling
```

# Key Features

-> Wake Word Detection — By saying “hey app” to activate the application
-> Command Recognition — Give short voice commands naturally
-> Auto Sleep Mode — Goes back to sleep after 5 seconds of silence
-> This web app is entirely voice-controlled.

# Notes

- The app uses the Web Speech API through the react-speech-recognition library.
  (Sleep -> Wake -> Sleep).
- Only works in browsers that can do voice recognition.
