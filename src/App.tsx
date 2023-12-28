import React from 'react';
import logo from './logo.svg';
import './App.css';

import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Dashboard /> */}
      {/* <ShowcaseLayout /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
