import { useState } from "react";
import Board from "./components/Board";
import { generateRandomBoard } from "./features/board/generateRandomBoard";

function App() {
  const initialBoard = generateRandomBoard(30);

  return (
    <>
      <div>
        <Board initialBoard={initialBoard} />
      </div>
    </>
  );
}

export default App;
