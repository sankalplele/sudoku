// generation of a 9*9 board
// simple logic:
// 1. think of each 9-box row
// 2. for each row: generate a random number between 1-9 to decide how many boxes in this row will be pre-filled, let us call this 'x'
// 3. generate 'x' numbers in the range 1-9
// 4. for each such number generate a random position index in the range 0-8
// 5. while (loop) this number exists in the current column ( given by random position index ) generate another position index
// 6. if the loop breaks, add this number in the board at the current row and generated random index
// 7. repeat this for all the 'x' numbers
// 8. repeat this for all the 9 rows

import { boardSize, maxPreFilledInRow } from "../utils/constants.js";

const generateRandomBoard = () => {
  let board = [];

  for (let k = 0; k < boardSize; k++) {
    board.push([]);
    for (let l = 1; l <= boardSize; l++) {
      board[k].push(0);
    }
  }

  for (let row = 0; row < boardSize; row++) {
    const preFilledCount = Math.ceil(maxPreFilledInRow * Math.random());
    for (let j = 1; j <= preFilledCount; j++) {
      let randomNumber = Math.ceil(boardSize * Math.random());
      // to ensure this number is not in the row
      while (board[row].includes(randomNumber))
        randomNumber = Math.ceil(boardSize * Math.random());

      let randomPosition = Math.floor(boardSize * Math.random());
      // to ensure this number is not in this column given by this position
      while (isInColumn(board, randomNumber, row, randomPosition))
        randomPosition = Math.floor(boardSize * Math.random());
      board[row][randomPosition] = randomNumber;
    }
  }

  return board;
};

const isInColumn = (board, number, row, column) => {
  for (let currentRow = 0; currentRow < row; currentRow++) {
    if (board[currentRow][column] == number) return true;
  }
  return false;
};

console.log(generateRandomBoard());
