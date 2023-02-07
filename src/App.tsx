import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterDiv from './components/CounterDiv'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <CounterDiv/>
      </header>
    </div>
  );
}

export default App;
