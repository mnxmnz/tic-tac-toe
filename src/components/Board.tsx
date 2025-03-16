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

  const handleClick = (index: number) => {
    if (squares[index] || winner) {
      return;
    }

    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    onPlay(newSquares);
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${currentPlayer}`;

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((value, index) => (
          <Square key={`square-${index}`} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
    </>
  );
}

export default Board;
