/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const row = matrix.length + 2;
  const matrixNew = [];
  for (let i = 0; i < row; i++) {
    matrixNew.push([0]);
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i === 0) {
      matrixNew[0].push(0);
    }
    for (let j = 0; j < matrix[i].length; j++) {
      matrixNew[0].push(0);
      matrixNew[i + 1].push(matrix[i][j]);
      matrixNew[matrixNew.length - 1].push(0);
      if (j === matrix[i].length - 1) {
        matrixNew[i + 1].push(0);
      }
    }
    if (i === matrix.length - 1) {
      matrixNew[matrixNew.length - 1].push(0);
    }
  }
  const matrixExit = [];
  for (let i = 0; i < matrix.length; i++) {
    matrixExit.push([]);
  }
  for (let i = 1; i < matrixNew.length - 1; i++) {
    for (let j = 1; j < matrixNew[1].length - 1; j++) {
      let count = 0;
      if (matrixNew[i - 1][j - 1] === true) count += 1;
      if (matrixNew[i - 1][j] === true) count += 1;
      if (matrixNew[i - 1][j + 1] === true) count += 1;
      if (matrixNew[i][j - 1] === true) count += 1;
      if (matrixNew[i][j + 1] === true) count += 1;
      if (matrixNew[i + 1][j - 1] === true) count += 1;
      if (matrixNew[i + 1][j] === true) count += 1;
      if (matrixNew[i + 1][j + 1] === true) count += 1;
      matrixExit[i - 1].push(count);
    }
  }
  return matrixExit;
}

module.exports = minesweeper;
