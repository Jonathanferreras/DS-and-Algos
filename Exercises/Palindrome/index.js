// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/**
 * My initial implementation
 */

module.exports = function palindrome(str) {
  // reverse the string provided to us
  // then compare the reversed string with the given string and return the result of that comparision

  let reversedStr = '';

  for(let char of str) {
    reversedStr = char + reversedStr
  }

  return str === reversedStr;
}