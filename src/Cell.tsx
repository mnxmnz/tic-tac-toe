interface CellProps {
  value: string;
  onClick: () => void;
}

function Cell({ value, onClick }: CellProps) {
  return (
    <button className="cell" onClick={onClick}>
      {value}
    </button>
  );
}

export default Cell;
