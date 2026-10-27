import { BOARD_SIZE, BOX_SIZE } from "../../utils/constants.js";

const traverseSpiral = (startRow, startCol) => {
  let traversal = [];

  traversal.push({ row: startRow, col: startCol, type: "tl" });

  for (let topCol = 1; topCol < BOX_SIZE - 1; topCol++) {
    traversal.push({ row: startRow, col: startCol + topCol, type: "t" });
  }

  traversal.push({ row: startRow, col: startCol + BOX_SIZE - 1, type: "tr" });

  for (
    let rightRow = startRow + 1;
    rightRow < startRow + BOX_SIZE - 1;
    rightRow++
  ) {
    traversal.push({ row: rightRow, col: startCol + BOX_SIZE - 1, type: "r" });
  }

  traversal.push({
    row: startRow + BOX_SIZE - 1,
    col: startCol + BOX_SIZE - 1,
    type: "br",
  });

  for (
    let bottomCol = startCol + BOX_SIZE - 2;
    bottomCol > startCol;
    bottomCol--
  ) {
    traversal.push({ row: startRow + BOX_SIZE - 1, col: bottomCol, type: "b" });
  }

  traversal.push({ row: startRow + BOX_SIZE - 1, col: startCol, type: "bl" });

  for (let leftRow = startRow + BOX_SIZE - 2; leftRow > startRow; leftRow--) {
    traversal.push({ row: leftRow, col: startCol, type: "l" });
  }

  return traversal;
};

export const traverseBlockSpiral = () => {
  let allBlockTraversal = [];
  for (let rowFactor = 0; rowFactor < BOARD_SIZE; rowFactor += BOX_SIZE) {
    for (let colFactor = 0; colFactor < BOARD_SIZE; colFactor += BOX_SIZE) {
      allBlockTraversal.push(traverseSpiral(rowFactor, colFactor));
    }
  }

  return allBlockTraversal;
};
