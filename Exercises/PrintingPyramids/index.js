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
 * My inital implementation
 */

module.exports = function pyramid(n) {
  // first find the mid
  // then run loop n times
  // if col less than mid - row or col greater than mid + row, then add space, else add #
  const totalCols = n + (n - 1);
  const mid = Math.floor(totalCols / 2);

  for(let row = 0; row < n; row++) {
    let level = '';

    for(let col = 0; col < totalCols; col++) {
      if (col < mid - row || mid + row < col) {
        level += ' ';
      } 
      else {
        level += '#';
      }
    }

    console.log(level);
  }
}


/**
 * Other implemetations
 */


// Using recursion

// module.exports = function pyramid(n, row = 0, level = '') {
//   if(n === row) {
//     return;
//   }

//   const totalCols = 2 * n - 1;
//   const mid = Math.floor(totalCols / 2);

//   if(totalCols === level.length) {
//     console.log(level)
//     return pyramid(n, row + 1);
//   }


//   if(level.length < mid - row || level.length > mid + row){
//     level += ' ';
//   } 
//   else {
//     level += '#';
//   }

//   pyramid(n, row, level);
// }