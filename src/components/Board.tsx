import Square from './Square';

import calculateWinner from '../utils/calculateWinner';
import formatGameStatus from '../utils/formatGameStatus';
import { Player, Board as BoardType } from '../types';

interface BoardProps {
  currentPlayer: Player;
  squares: BoardType;
  onPlay: (nextSquares: BoardType) => void;
}

function Board({ currentPlayer, squares, onPlay }: BoardProps) {
  const result = calculateWinner(squares);

  const handleClick = (index: number) => {
    if (squares[index] || result) {
      return;
    }

    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    onPlay(newSquares);
  };

  const status = formatGameStatus(result, currentPlayer);

  return (
    <div className="game-board">
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((value, index) => (
          <Square key={`square-${index}`} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
    </div>
  );
}

export default Board;
