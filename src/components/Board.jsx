import { useState } from "react";
import Box from "./Box";
import { isValid } from "../features/board/validateInsertion";
import { BOARD_SIZE, BOX_SIZE } from "../utils/constants";

function Board({ initialBoard, blockTraversal }) {
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
          gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
          gridTemplateRows: `repeat(${BOARD_SIZE}, 1fr)`,
          justifyContent: "center",
          border: "3px solid black",
          aspectRatio: "1",
          width: "500px",
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
              typeObj={blockTraversal[
                BOX_SIZE * Math.floor(rowIndex / BOX_SIZE) +
                  Math.floor(boxIndex / BOX_SIZE)
              ].find((obj) => obj.row === rowIndex && obj.col === boxIndex)}
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
