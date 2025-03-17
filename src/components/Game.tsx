import { useState } from 'react';

import Board from './Board';
import MoveHistory from './MoveHistory';

import { Player, History, Board as BoardType } from '../types';
import { BOARD_SIZE } from '../constants';

const PLAYER_X: Player = 'X';
const PLAYER_O: Player = 'O';

function Game() {
  const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState<History>([Array(BOARD_SIZE).fill(null)]);

  const currentSquares = history[currentMove];
  const currentPlayer = currentMove % 2 === 0 ? PLAYER_X : PLAYER_O;

  const handlePlay = (nextSquares: BoardType) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextSquares: BoardType) => {
    setCurrentMove(history.indexOf(nextSquares));
  };

  return (
    <div className="game">
      <Board currentPlayer={currentPlayer} squares={currentSquares} onPlay={handlePlay} />
      <MoveHistory history={history} onJumpTo={jumpTo} />
    </div>
  );
}

export default Game;
