import Square from './Square';
import calculateWinner from '../utils/calculateWinner';

type Player = 'X' | 'O';

interface BoardProps {
  currentPlayer: Player;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
}

function Board({ currentPlayer, squares, onPlay }: BoardProps) {
  const winner = calculateWinner(squares);

  const makeMove = (index: number) => {
    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    onPlay(newSquares);
  };

  const handleClick = (index: number) => {
    if (squares[index] || winner) {
      return;
    }

    makeMove(index);
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${currentPlayer}`;

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;
