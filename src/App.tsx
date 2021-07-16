import React from 'react';
import wordmark from './assets/wordmark.svg';
import './App.css';
import PeoplePage from './pages/people-page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <img src={wordmark} alt="wordmark" className="wordmark"/>
      <PeoplePage></PeoplePage>
    </div>
  );
}

export default App;
