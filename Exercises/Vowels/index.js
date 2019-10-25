// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


/**
 * My implementation
 */

module.exports = function getVowels(str) {
  const vowels = 'aeiou';
  let count = 0;

  for(let char of str.split('')) {
    if(vowels.includes(char.toLowerCase())) {
      count += 1;
    }
  }

  return count;
}