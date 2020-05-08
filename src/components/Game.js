import React, { useState, useEffect } from 'react';
import Grid from './Grid.js';
import Score from './Score.js';
import Timer from './Timer.js';

function generateColor() {
  const hue = Math.floor(Math.random() * (360));
  const saturation = Math.floor(Math.random() * (90 - 60) + 60);
  const lightness = Math.floor(Math.random() * (75 - 100) + 75);

  return [hue, saturation, lightness]
}

function computeGridSize(score) {
  return score === 0 ? 2 : score < 9 ? score + 2 : 10
}

export default function Game() {

  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [color, setColor] = useState(generateColor())
  const [size, setSize] = useState(computeGridSize(score));
  const [winner, setWinner] = useState(Math.floor(Math.random() * (size ** 2)))

    useEffect(() => {
        if (timeLeft > 0) {
            setTimeout(() => {setTimeLeft(timeLeft - 1)}, 1000)
        }
    }, [timeLeft])

  const updateScore = () => {
    if (timeLeft > 0) {
      setScore(score + 1);
      setColor(generateColor());
      setSize(computeGridSize(score));
      setWinner(Math.floor(Math.random() * (size ** 2)))
    }
  }

  return (
    <div className='row'>
      <div className='game-state'>
        <div>
        <Score score={score} />
        </div>
        <div>
        <Timer timeLeft={timeLeft} />
        </div>
      </div>
      <Grid size={size} winner={winner} color={color} updateScore={updateScore} />
      <div className='right-side'></div>
    </div>
  )
}
