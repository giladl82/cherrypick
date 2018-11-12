import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cherry from 'cherrylib/lib/Cherry'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Cherry cherryType='Bing' />
        </header>
      </div>
    );
  }
}

export default App;
