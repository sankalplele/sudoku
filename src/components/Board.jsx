import { useState } from "react";
import Box from "./Box";
import { isValid } from "../features/board/validateInsertion";

function Board({ initialBoard }) {
  const [board, setBoard] = useState(initialBoard);
  const [isBoardEditing, setIsBoardEditing] = useState(false);
  const [editingCell, setEditingCell] = useState(null);
  const [count, setCount] = useState(0);

  const handleSubmit = () => {
    if (!editingCell) return;

    const { row, col } = editingCell;
    const value = count % 10;
    console.log(value);

    if (isValid(board, row, col, value)) {
      setBoard((previousBoard) =>
        previousBoard.map((boardRow, rowIndex) =>
          rowIndex === row
            ? boardRow.map((cell, colIndex) =>
                colIndex === col ? value : cell,
              )
            : boardRow,
        ),
      );
    } else {
      console.log("not valid");
    }
    setCount(0);
    setEditingCell(null);
    setIsBoardEditing(false);
  };

  const handleAbort = () => {
    setCount(0);
    setEditingCell(null);
    setIsBoardEditing(false);
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(9, 1fr)",
          gridTemplateRows: "repeat(9, 1fr)",
          justifyContent: "center",
          border: "3px solid black",
          width: "270px",
          height: "270px",
        }}
      >
        {board.map((row, rowIndex) => {
          return row.map((box, boxIndex) => (
            <Box
              value={box}
              row={rowIndex}
              col={boxIndex}
              isEditing={
                editingCell?.row === rowIndex && editingCell?.col === boxIndex
              }
              isBoardEditing={isBoardEditing}
              setIsBoardEditing={setIsBoardEditing}
              count={count}
              setCount={setCount}
              onSelect={(row, col) => setEditingCell({ row, col })}
              key={boxIndex + "" + rowIndex}
              isPreFilled={initialBoard[rowIndex][boxIndex] != 0}
            />
          ));
        })}
      </div>

      {editingCell ? (
        <>
          <button onClick={handleSubmit}>Submit</button>{" "}
          <button onClick={handleAbort}>Abort</button>
        </>
      ) : null}
    </>
  );
}

export default Board;
