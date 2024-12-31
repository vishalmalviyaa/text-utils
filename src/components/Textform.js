import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase!", "success");  // Call showAlert with message and type
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared!", "warning");
  };

  const handleSpace = () => {
    let newText = text.replace(/\s+/g, '');
    setText(newText);
    props.showAlert("Spaces Removed!", "info");
  };

  const speak = () => {
    let utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
    props.showAlert("Reading Text Aloud!", "info");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h1 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`} my-3>{props.heading}</h1>
      <div className="mb-4 my-5" style={{ maxWidth: '99%', margin: '0 auto' }}>
        <textarea
          className={`form-control ${props.mode === 'dark' ? 'bg-gray text-light' : 'bg-light text-dark'}`}
          id="exampleFormControlTextarea1"
          rows="12"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>

      <div className="btn-group" style={{ gap: '10px' }}>
        <button type="button" className="btn btn-primary" onClick={handleUpperCase}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary" onClick={handleLowercase}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary" onClick={handleClear}>Clear Text</button>
        <button type="button" className="btn btn-primary" onClick={handleSpace}>Remove Spaces</button>
        <button type="button" className="btn btn-primary" onClick={speak}>Read Aloud</button>
      </div>

      <div className="container my-4">
        <h1>Your text summary</h1>
        <p>{text.trim().split(/\s+/).filter((word) => word.length > 0).length} Words and {text.length} Characters</p>
        <p>{text}</p>
      </div>
    </>
  );
}
