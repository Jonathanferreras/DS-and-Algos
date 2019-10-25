// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


/**
 * My implementation
 */

module.exports = function pyramid(n) {
  // first find the mid
  // then run loop n times
  // if col less than mid - row or col greater than mid + row, then add space, else add #
  const totalCols = n + (n - 1);
  const mid = Math.floor(totalCols / 2);

  for(let row = 0; row < n; row++) {
    let stair = '';

    for(let col = 0; col < totalCols; col++) {
      if (col < mid - row || col > mid + row) {
        stair += ' ';
      } 
      else {
        stair += '#';
      }
    }

    console.log(stair);
  }
}


/**
 * Other implemetations
 */