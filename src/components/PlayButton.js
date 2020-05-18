import React from 'react';

export default function PlayButton({ gameState, startGame }) {
    return (
        <div className='grid'>
        <button className='play-button' onClick={startGame}>{gameState === 'game-over' ? <span>Game Over!<br />Play again</span> : 'Play'}</button>
        </div>
    )
}