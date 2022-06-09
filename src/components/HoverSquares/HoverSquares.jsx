import React from 'react';
import s from './HoverSquares.module.css'

const HoverSquares = ({squares, getRow, getColumn}) => {
  return (
      <>
        <h1>Hover squares</h1>
        {squares.map(square => (
            <div className={s.squareItem} key={square}>
              row: {getRow(square)} column: {getColumn(square)}
            </div>
        ))}
      </>
  );
};

export default HoverSquares;