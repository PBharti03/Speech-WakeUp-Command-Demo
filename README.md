# 🗣️ Voice WakeUp & Command Web App

This is a simple web application that brings voice control to your browser! It's built with the common web frameworks you're learning—React—and uses a clever library to access your browser's built-in voice recognition feature.

### 💡 What It Does

1. Listens quietly in the background for a wake phrase — for example, “hey assistant.”, "hey app", "hey Google"
2. When it hears the wake phrase, it **wakes up** and starts listening for voice commands.
3. You can say one or more short commands (like “turn on the light” or “what’s the weather”).
4. The Timeout: If you don't say anything for about 5 seconds, the app realizes the conversation is over and politely goes back to Sleeping Mode.

### ⚙️ How to Run It

1. Make sure you have **Node.js** and **npm** installed.
2. Create a new React app or clone this project.
3. Open your project in VS Code (or your favorite editor).
4. Install the required package:

```bash
npm install react-speech-recognition
```

5. Start the app:

```bash
npm start
```

6. Open your browser to `http://localhost:3000`.

> Works best in **Google Chrome** or **Microsoft Edge** because they have the best support for voice recognition. I have checked in these two.

### 🧱 Project Structure

```
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

### 🧩 Key Features

- **Wake Word Detection:** Say “hey app” or similar phrases to activate.
- **Multiple Command Capture:** Speak several short commands after waking.
- **Auto Reset:** Returns to sleeping mode after 5 seconds of silence.
- **No Buttons:** Entirely voice-controlled.

### 📋 Notes

- Voice recognition uses the **Web Speech API** (experimental in some browsers).
  (Sleep -> Wake -> Sleep).
- Only available in browsers that support speech recognition.
- For a real product, you’d likely use a dedicated voice SDK or cloud speech service.
