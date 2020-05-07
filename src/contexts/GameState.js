import React, { useState } from 'react';
import Grid from '../components/Grid.js';

const maxSize = 10;

export default function GameStateProvider() {
  const [gameState, setGameState] = useState({
    level: 1,
    size: 2,
    color: [200, 100, 35]
  })

  const updateGameState = () => {
    setGameState({ level: gameState.level + 1, size: gameState.size < maxSize ? gameState.size + 1 : maxSize, color: [Math.floor(Math.random() * (360)), 100, Math.ceil(Math.random() * (90))] });
  }

  return <div><Grid size={gameState.size} updateGameState={updateGameState} color={gameState.color}/></div>
}
