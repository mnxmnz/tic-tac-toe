import { Player } from '../types';

function formatGameStatus(result: string | null, currentPlayer: Player) {
  switch (result) {
    case 'draw':
      return 'Draw!';
    case null:
      return `Next player: ${currentPlayer}`;
    default:
      return `Winner: ${result}`;
  }
}

export default formatGameStatus;
