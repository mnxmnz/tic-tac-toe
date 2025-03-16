import { WINNING_LINES } from '../constants';
import { Square } from '../types';

function calculateWinner(squares: Square[]) {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    const [a, b, c] = WINNING_LINES[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default calculateWinner;
