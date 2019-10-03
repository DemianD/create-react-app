import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="content-center">
        <header className="min-h-screen flex flex-col items-center justify-center text-2xl">
          <img
            src={logo}
            className="h-48 pointer-events-none App-logo"
            alt="logo"
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
