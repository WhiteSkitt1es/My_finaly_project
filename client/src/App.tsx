import React from 'react';
import './App.css';
import NavigationsBar from './layouts/NavigationsAndFooter/NavigationsBar';
import HomePage from './layouts/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <NavigationsBar />
      <HomePage />
    </div>
  );
}

export default App;