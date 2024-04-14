import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'; // Import your CSS file
import App from './App'; // Import your main component (`App.js`)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
