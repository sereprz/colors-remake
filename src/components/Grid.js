import React from 'react';
import Square from './Square.js'


export default function Grid({ color, winner, size, updateScore, score }) {

    let squares = [];
    for (let i = 0; i < size ** 2; i++) {
      squares.push(
        { id: i, isWinning: i === winner ? true : false }
      )
    }

    let rows = [];
    while (squares.length) rows.push(squares.splice(0, size));

    return (
      <div className='grid'>
        {rows.map((row, index) => {
          return (<div key={index}>
            {row.map(({ id, isWinning }) => {
              return <Square color={color} size={size} key={id} isWinning={isWinning}   clickHandler={updateScore} score={score} />
            })}
          </div>)
        })}
      </div>
  )
}
