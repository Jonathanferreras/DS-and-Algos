// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


/**
 * My initial implementation
 */

module.exports = function reverse(num) {
  // take number and convert into a string
  // if number is negative meaning less than zero, then we want to chop/place the neg in front
  let isNeg = false;

  if(num < 0) {
    isNeg = true;
    num = Math.abs(num);
  }

  const reversedNum = num
    .toString()
    .split('')
    .reverse()
    .join('');
  
  return parseInt(isNeg ? `-${reversedNum}` : reversedNum);
}


/**
 * Other approach
 */

// module.exports = function reverse(num) {
//   // take number and convert into a string
//   // if number is negative meaning less than zero, then we want to chop/place the neg in front

//   const reversedNum = num
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
  
//   return parseInt(reversedNum) * Math.sign(num);
// }