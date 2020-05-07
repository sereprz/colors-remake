import React from 'react';
import Square from './Square.js'

export default function Grid({ size, updateGameState, color }) {
  console.log(updateGameState)

  const winningSq = Math.floor(Math.random() * (size ** 2))

  const gridSize = size;

  let squares = [];
  for (let i = 0; i < gridSize ** 2; i++) {
    squares.push(
      { id: i, isWinning: i === winningSq ? true : false }
    )
  }

  let rows = [];
  while (squares.length) rows.push(squares.splice(0, gridSize));

  return (
    <div className='grid '>
      {rows.map((row, index) => {
        return (<div className='row' key={index}>
          {row.map(({ id, isWinning }) => {
            return <Square color={color} key={id} isWinning={isWinning} clickHandler={updateGameState} />
          })}
        </div>)
      })}
    </div>
  )
}
