import React from 'react';
import './App.css';
import NavigationsBar from './layouts/NavigationsAndFooter/NavigationsBar';
import HomePage from './layouts/HomePage/HomePage';
import Footer from './layouts/NavigationsAndFooter/Footer';

function App() {
  return (
    <div className="App">
      <NavigationsBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;