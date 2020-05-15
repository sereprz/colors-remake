import React, { useState, useEffect } from 'react';
import Grid from './Grid.js';
import Score from './Score.js';
import Timer from './Timer.js';
import PlayButton from './PlayButton.js';


const gameTime = 60;

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
  const [gameState, setGameState] = useState('start');
  const [timeLeft, setTimeLeft] = useState(gameTime);
  const [color, setColor] = useState(generateColor())

  const size = computeGridSize(score);
  
  const [winner, setWinner] = useState(Math.floor(Math.random() * (size ** 2)))

  useEffect(() => {
      if (timeLeft > 0 && gameState === 'playing') {
          setTimeout(() => {setTimeLeft(timeLeft - 1)}, 1000)
      } else if (timeLeft === 0) {
        setGameState('game-over')
      }
  }, [timeLeft, gameState])

  const startGame = () => { 
    setTimeLeft(gameTime);
    setScore(0);
    setWinner(Math.floor(Math.random() * 4));
    setGameState('playing')
  }

  const updateScore = () => {
    if (timeLeft > 0) {
      setScore(score + 1);
      setColor(generateColor());
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
      {gameState === 'playing' ? <Grid size={size} winner={winner} color={color} updateScore={updateScore} score={score} /> : <PlayButton gameState={gameState} startGame={startGame} />}
      <div className='right-side'></div>
    </div>
  )
}
