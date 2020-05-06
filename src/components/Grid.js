import React, { useContext } from 'react';
import Square from './Square.js'
import { GameState } from '../contexts/GameState.js'

function Grid() {
  const { size } = useContext(GameState);

  const winningSq = Math.floor(Math.random() * (size ** 2))

  let squares = [];
  for (let i = 0; i < size ** 2; i++) {
    squares.push(
      { id: i, isWinning: i === winningSq ? true : false }
    )
  }

  let rows = [];
  while (squares.length) rows.push(squares.splice(0, size));

  return (
    <div className='grid '>
      {rows.map((row, index) => {
        return (<div className='row' key={index}>
          {row.map(square => {
            return Square(square.id, square.isWinning)
          })}
        </div>)
      })}
    </div>
  )
}

export default Grid;