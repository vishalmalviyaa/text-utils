import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // Function to show alerts
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);  // Clear alert after 5 seconds
    }, 5000);
  };

  // Function to toggle dark/light mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529'; // Dark mode background
      document.body.style.color = 'white'; // Dark mode text
      showAlert('Dark Mode Enabled!', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Light mode background
      document.body.style.color = 'black'; // Light mode text
      showAlert('Light Mode Enabled!', 'success');
    }
  };

  return (
    // <Router>
    <div>
      <Navbar mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      <Alert alert={alert} />
      <div className="container my-4">
        {/* <Routes>
          <Route
            path="/"
            element={<Textform heading="Text Utilities" showAlert={showAlert} mode={mode} />}
          />
        </Routes> */}
        <Textform heading="Text Utilities" showAlert={showAlert} mode={mode} />
      </div>
    </div>
    // </Router>
  );
}

export default App;
