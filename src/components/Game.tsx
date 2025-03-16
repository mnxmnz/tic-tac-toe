import { useState } from 'react';

import Board from './Board';
import MoveHistory from './MoveHistory';

import { Player, History, Square } from '../types';
import { BOARD_SIZE } from '../constants';

function Game() {
  const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState<History>([Array(BOARD_SIZE).fill(null)]);

  const currentSquares = history[currentMove];
  const currentPlayer: Player = currentMove % 2 === 0 ? 'X' : 'O';

  const handlePlay = (nextSquares: Square[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextSquares: Square[]) => {
    setCurrentMove(history.indexOf(nextSquares));
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board currentPlayer={currentPlayer} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <MoveHistory history={history} onJumpTo={jumpTo} />
      </div>
    </div>
  );
}

export default Game;
