import React from 'react';
import './App.scss';

import Board from './Components/Board';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>BASEMENT</h1>
        <Board />
      </header>
    </div>
  );
}

export default App;
