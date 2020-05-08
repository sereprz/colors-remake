import React from 'react';

export default function PlayButton({ startGame }) {
    console.log('hi')
    return (
        <div className='grid'>
        <button className='play-button big' onClick={startGame}>Play</button>
        </div>
    )
}