import { useState } from "react";
import Board from "./components/Board";
import { generateRandomBoard } from "./features/generateRandomBoard";

function App() {
  const initialBoard = generateRandomBoard(45);

  return (
    <>
      <div>
        <Board initialBoard={initialBoard} />
      </div>
    </>
  );
}

export default App;
