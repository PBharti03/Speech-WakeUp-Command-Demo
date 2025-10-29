import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./index.css";
import SpeechRecognitionApp from "./Components/SpeechRecognitionApp";

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark ">
        <div className="container-fluid">
          <a href="/" className="navbar-brand text-info">
            🗣️Speech Recognition
          </a>
        </div>
      </nav>
      <section className="container-fluid m-auto text-center mt-5"
        style={{
          background: 'white',
          borderRadius: 16,
          padding: 20,
          boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        }}
      >
        <header className="container-fluid m-auto text-center mb-5">
          <h1 className="text-info"> 🎙️ Speech Command Demo</h1>
          <span className="text-dark">Web Speech API & wake-word demo</span>
        </header>

        <section className="container-fluid m-auto ">
          <div className="row m-auto text-center">
            <div className="col">
              <SpeechRecognitionApp/>            
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
export default App;
