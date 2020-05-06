import React from 'react';

import Grid from './components/Grid.js'
import GameStateProvider from './contexts/GameState.js';

function App() {
  return (
    <div className="App">
    <GameStateProvider>
      <Grid />
    </GameStateProvider>
    </div>
  );
}

export default App;
