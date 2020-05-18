import React from 'react';

function getColor(color, isWinning, score) {
  let [h, s, l] = color;
  
  if (isWinning) {
    l = l - (50/ ((0.3 * score) + 1))
  }
  return `hsl(${h},  ${s}%,  ${l}%)`
}

export default function Square({ isWinning, color, clickHandler, size, score}) {

  const width = Math.floor(600/size) - 6;
  const col = getColor(color, isWinning, score)

  return (
    <button onClick={isWinning ? clickHandler : () => {}} className='square' style={{ backgroundColor: col, width: width, height: width}}>
    </button>
  )
}
