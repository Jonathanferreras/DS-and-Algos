// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



/** 
 * My initial implementation (without prebuilt methods)
 * */

module.exports = function reverse(str) {
  // create a variable called reversedString that will store my new string
  // then use a for loop to iterate the string and add each letter to my variable reversedString

  let reversedString = '';

  for(let i = 0; i < str.length; i++) {
    reversedString = str[i] + reversedString;
  }

  return reversedString;
}


/**
 * Other implementations
 */


// Using array method 'reverse'

// module.exports = function reverse(str)  {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }


// Using for-of loop

// module.exports = function reverse(str) {
//   let reversedString = '';

//   for(let char of str) {
//     reversedString = char + reversedString;
//   }

//   return reversedString;
// }


// Using array reduce method

// module.exports = function reverse(str) {
//   return str
//     .split('')
//     .reduce((reversedString, char) => char + reversedString, '');
// }