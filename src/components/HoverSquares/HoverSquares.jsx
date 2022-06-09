import React from 'react';
import s from './HoverSquares.module.css'

const HoverSquares = ({squares, getRow, getColumn}) => {
  return (
      <>
        <h2>Hover squares</h2>
        <ul>
          {squares.map(square => (
              <li className={s.squareItem} key={square}>
                row: {getRow(square)} column: {getColumn(square)}
              </li>
          ))}
        </ul>
      </>
  );
};

export default HoverSquares;