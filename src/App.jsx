import React from 'react';
import './App.scss';

import Dice from './Models/Dice/Dice';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Dice faceColor="black" rollTime={2} />
      </div>
    </div>
  );
}

export default App;
