  
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