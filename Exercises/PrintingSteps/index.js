  
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


/**
 * My implementations
 */

module.exports = function printSteps(n) {
  let steps = ''
  for(let i = 0; i < n; i++) {
    steps += '#'
    console.log(steps + addSpaces(n - i - 1))
  }
}

function addSpaces(n) {
  let spaces = '';

  for(let i = 0; i < n; i++) {
    spaces += ' ';
  }

  return spaces;
}


/**
 * Other implementations
 */

// module.exports = function steps(n) {
//   for(let row = 0; row < n; row++) {
//     let stair = '';

//     for(let col = 0; col < n; col++) {
//       if(col <= row) {
//         stair += '#';
//       }
//       else {
//         stair += ' ';
//       }
//     }

//     console.log(stair);
//   }
// }


// Using Recursion (my attempt)

// module.exports = function steps(n, stair = '') {
//   // establish base case, stop if n equals to zero
//   if(n === 0) {
//     return;
//   }

//   stair += '#';
//   let spaces = '';

//   for(let i = 0; i < n - 1; i++) {
//     spaces += ' ';
//   }

//   console.log(stair + spaces);

//   steps(n - 1, stair);
// }


// Using Recursion #2

// module.exports = function steps(n, row = 0, stair = '') {
//   if(n === row) {
//     return;
//   }

//   if(n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }

//   const add = stair.length <= row ? '#' : ' ';

//   steps(n, row, stair + add);
// }