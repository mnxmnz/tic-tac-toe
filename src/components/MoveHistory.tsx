import { History, Board } from '../types';

type MoveHistoryProps = {
  history: History;
  onJumpTo: (squares: Board) => void;
};

function MoveHistory({ history, onJumpTo }: MoveHistoryProps) {
  const moves = history.map((squares, move) => {
    const description = move > 0 ? `Go to move #${move}` : 'Go to game start';

    return (
      <li key={`move-${move}`} className="history-item">
        <button className="history-button" onClick={() => onJumpTo(squares)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game-info">
      <h3 className="history-title">Move History</h3>
      <ol className="history-list">{moves}</ol>
    </div>
  );
}

export default MoveHistory;
