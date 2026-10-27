import { useState } from "react";
import Board from "./components/Board";
import { generateRandomBoard } from "./features/board/generateRandomBoard";
import { traverseBlockSpiral } from "./features/board/blockBorder";

function App() {
  const initialBoard = generateRandomBoard(45);
  const blockTraversal = traverseBlockSpiral();

  return (
    <>
      <div>
        <Board initialBoard={initialBoard} blockTraversal={blockTraversal} />
      </div>
    </>
  );
}

export default App;
