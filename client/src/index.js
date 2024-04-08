import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Root element to render the application.
 * @type {ReactRoot}
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application within a React Strict Mode.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Function to measure and report web vitals performance.
 * @function
 * @param {Function} [onPerfEntry] - Callback function to log performance results.
 * @returns {void}
 * @see {@link https://bit.ly/CRA-vitals} For more information on measuring performance.
 */
reportWebVitals();
