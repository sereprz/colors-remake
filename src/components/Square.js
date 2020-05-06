import React, { useContext } from 'react';
import { GameState } from '../contexts/GameState.js'


function Square(i, isWinning) {
  const { color, updateGameState } = useContext(GameState);

  const col = isWinning ? `hsl(${color[0]},  ${color[1]}%,  ${color[2] * 0.80}%)` : `hsl(${color[0]},  ${color[1]}%,  ${color[2]}%)`

  return (
    <button className='square' key={i} onClick={isWinning ? updateGameState : null} style={{ backgroundColor: col }}>
    </button>
  )
}

export default Square;