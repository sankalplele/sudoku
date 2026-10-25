import { boardSize } from "../utils/constants";

const BOARD_SIZE = 9;
const BOX_SIZE = 3;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isValid = (board, row, col, num) => {
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
