import { BOARD_SIZE, BOX_SIZE } from "../../utils/constants.js";

export const isValid = (board, row, col, num) => {
  if (num == 0) return true;
  for (let i = 0; i < BOARD_SIZE; i++) {
    if (board[row][i] === num || board[i][col] === num) return false;
  }

  const boxStartRow = Math.floor(row / BOX_SIZE) * BOX_SIZE;
  const boxStartCol = Math.floor(col / BOX_SIZE) * BOX_SIZE;

  for (let i = 0; i < BOX_SIZE; i++) {
    for (let j = 0; j < BOX_SIZE; j++) {
      if (board[boxStartRow + i][boxStartCol + j] === num) return false;
    }
  }

  return true;
};
