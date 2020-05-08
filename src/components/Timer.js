import React from 'react';

export default function Timer({ timeLeft }) {
    return (
        <div>
        <p>Time left:</p>
        <div className='big' style={{color: timeLeft > 5 ? "black" : "red"}}>{timeLeft}</div>
        </div>
    )
}