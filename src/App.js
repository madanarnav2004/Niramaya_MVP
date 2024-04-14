import React, { useState, useEffect } from 'react';
import './style.css';
import MultiStepForm from './MultiStepForm'; // Import your MultiStepForm component

// Main App component
function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Simulate delay to show splash screen
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Adjust the delay time as needed (in milliseconds)

    // Cleanup function to clear timeout
    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <div className="App">
      {showSplash ? (
        <div className="splash-screen">
          {/* Logo for splash screen */}
          <img src={require('./logo.png')} alt="Splash Logo" />
        </div>
      ) : (
        <div className="main-content">
          {/* Other components or content */}
          <MultiStepForm />
          {/* Image for bottom right corner */}
          <img
            src={require('./logo2.jpg')}
            alt="Bottom Right Image"
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              width: '80px',
              height: 'auto',
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
