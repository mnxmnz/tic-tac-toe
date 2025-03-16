import { Square as SquareType } from '../types';

interface SquareProps {
  value: SquareType;
  onClick: () => void;
}

function Square({ value, onClick }: SquareProps) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
