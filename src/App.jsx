import React from 'react';

import Dice from 'components/Dice';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dice value={4} />
      </header>
    </div>
  );
}

export default App;
