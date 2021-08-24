import React from 'react';
import logo from './logo.svg';
import './App.css';

const isDev = process.env.NODE_ENV === 'development'

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          In progress...
        </p>
        <a
          className="App-link"
          href={isDev ? 'http://localhost:1337/cra/analyze/report.html' : '/analyze/report.html'}
          target="_blank"
          rel="noopener noreferrer"
        >
          Bundle analyzer
        </a>
        <pre>
          {JSON.stringify({
            NODE_ENV: process.env.NODE_ENV,
            REACT_APP_API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT
          }, null, 2)}
        </pre>
      </header>
    </div>
  );
}
