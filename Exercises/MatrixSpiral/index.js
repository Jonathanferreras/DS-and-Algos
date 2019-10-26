// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


/**
 * My implementation (couldn't solve on first attempt)
 */

// module.exports = function matrixSpiral(n) {
//   // first create empty matrix
//   // start from a row, populate each column in that row
//   // once you reach the end, check if the row column in the next row is empty
//   // if so, then go down till the last row with empty column
//   const matrix = [];
//   let num = 1;
//   let startRow = 0;
//   let startCol = 0;
//   let endRow = n - 1;
//   let endCol = n - 1;

//   let i = 0;
//   let j = n - 1;

//   for(let i = 0; i < n; i++) {
//     matrix.push([]);
//   }


//   while(true) {

//     // go right
//     for(let col = startCol; col < endCol; col++) {
//       matrix[startRow][col] = num;
//       num++;
//     }

//     // go down
//     for(let row = startRow; row < endRow; row++) {
//       matrix[row][endCol] = num;
//       num++;
//     }

//     // go left
//     for(let col = endCol; col > startCol; col--) {
//       matrix[endRow][col] = num;
//       num++;
//     }

//     // go up
//     for(let row = endRow; row > startRow; row-- ) {
//       matrix[row][startCol] = num;
//       num++;
//     }

//     startRow++;
//     startCol++;
//     endRow--;
//     endCol--;

//   }
// }


/**
 * Other implementations
 */


module.exports = function matrixSpiral(n) {
  const results = [];

  for(let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while(startCol <= endCol && startRow <= endRow) {
    // top row
    for(let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }

    startRow++;

    // right column
    for(let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }

    endCol--;

    // bottom row
    for(let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter;
      counter++;
    }

    endRow--;

    // left column
    for(let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++;
    }

    startCol++;

  }

  return results;
}