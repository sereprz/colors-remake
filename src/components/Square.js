import React from 'react';

export default function Square({ isWinning, color, clickHandler, size}) {

  const col = isWinning ? `hsl(${color[0]},  ${color[1]}%,  ${color[2] * 0.80}%)` : `hsl(${color[0]},  ${color[1]}%,  ${color[2]}%)`

  const width = (600/size) - 6;

  return (
    <button onClick={isWinning ? clickHandler : () => {}} className='square' style={{ backgroundColor: col, width: width, height: width}}>
    </button>
  )
}
