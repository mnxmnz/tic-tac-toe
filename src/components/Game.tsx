import { useState } from 'react';

import Board from './Board';

type Player = 'X' | 'O';

function Game() {
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);

  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares: (string | null)[]) => {
    setHistory([...history, nextSquares]);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board currentPlayer={currentPlayer} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}

export default Game;
