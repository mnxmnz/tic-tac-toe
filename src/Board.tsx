import { useState } from 'react';

import Cell from './Cell';

function Board() {
  const [cells, setCells] = useState<string[]>(Array(9).fill(null));

  const handleClick = (index: number) => {
    const newCells = [...cells];
    newCells[index] = 'X';
    setCells(newCells);
  };

  return (
    <>
      <div className="board-row">
        <Cell value={cells[0]} onClick={() => handleClick(0)} />
        <Cell value={cells[1]} onClick={() => handleClick(1)} />
        <Cell value={cells[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Cell value={cells[3]} onClick={() => handleClick(3)} />
        <Cell value={cells[4]} onClick={() => handleClick(4)} />
        <Cell value={cells[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Cell value={cells[6]} onClick={() => handleClick(6)} />
        <Cell value={cells[7]} onClick={() => handleClick(7)} />
        <Cell value={cells[8]} onClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;
