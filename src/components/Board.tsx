import { useState } from 'react';

import Square from './Square';
import calculateWinner from '../utils/calculateWinner';

type Player = 'X' | 'O';

function Board() {
  const [player, setPlayer] = useState<Player>('X');

  const switchTurn = () => {
    switch (player) {
      case 'X':
        setPlayer('O');
        break;
      case 'O':
        setPlayer('X');
        break;
      default:
        setPlayer('X');
    }
  };

  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));

  const makeMove = (index: number) => {
    const newSquares = [...squares];
    newSquares[index] = player;
    setSquares(newSquares);
  };

  const winner = calculateWinner(squares);

  const onClickSquare = (index: number) => {
    if (squares[index] || winner) {
      return;
    }

    makeMove(index);
    switchTurn();
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${player}`;

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => onClickSquare(0)} />
        <Square value={squares[1]} onClick={() => onClickSquare(1)} />
        <Square value={squares[2]} onClick={() => onClickSquare(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => onClickSquare(3)} />
        <Square value={squares[4]} onClick={() => onClickSquare(4)} />
        <Square value={squares[5]} onClick={() => onClickSquare(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => onClickSquare(6)} />
        <Square value={squares[7]} onClick={() => onClickSquare(7)} />
        <Square value={squares[8]} onClick={() => onClickSquare(8)} />
      </div>
    </>
  );
}

export default Board;
