import { BOARD_SIZE, BOX_SIZE } from "../../utils/constants.js";
import { isValid } from "./validateInsertion.js";
let arr = [];

for (let i = 1; i <= BOARD_SIZE; i++) {
  arr.push(i);
}

const fillBoard = (board, row, col) => {
  if (col == BOARD_SIZE) return fillBoard(board, row + 1, 0);
  if (row == BOARD_SIZE) return true;

  for (const num of arr) {
    if (isValid(board, row, col, num)) {
      board[row][col] = num;
      if (fillBoard(board, row, col + 1)) return true;
      board[row][col] = 0;
    }
  }

  return false;
};

export const generateRandomBoard = (clues) => {
  const board = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    board.push(Array(BOARD_SIZE).fill(0));
    for (let col = 0; col < BOARD_SIZE; col++) {
      board[row][col] = 0;
    }
  }

  fillBoard(board, 0, 0);

  let cellsToRemove = BOARD_SIZE * BOARD_SIZE - clues;

  while (cellsToRemove > 0) {
    const row = Math.floor(Math.random() * BOARD_SIZE);
    const col = Math.floor(Math.random() * BOARD_SIZE);

    if (board[row][col] !== 0) {
      board[row][col] = 0;
      cellsToRemove--;
    }
  }

  return board;
};
