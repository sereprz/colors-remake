import React from 'react';

export default function Score({ score }) {
    return (
        <div>
        <p>Total Score:</p>
        <div className='big'>{score}</div>
        </div>
    )
}