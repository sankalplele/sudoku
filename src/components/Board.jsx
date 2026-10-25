import React, { useState } from "react";
import Box from "./Box";

function Board({ initialBoard }) {
  const [board, setBoard] = useState(initialBoard);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(9, 1fr)",
          gridTemplateRows: "repeat(9, 1fr)",
          justifyContent: "center",
          border: "3px solid black",
          width: "200px",
          height: "200px",
        }}
      >
        {board.map((row, rowIndex) => {
          return row.map((box, boxIndex) => (
            <Box value={box} key={boxIndex + "" + rowIndex} />
          ));
        })}
      </div>
    </>
  );
}

export default Board;
