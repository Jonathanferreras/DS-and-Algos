// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/**
 * My implementation
 */

module.exports = function maxChars(str) {
  let charMap = {};

  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  let maxNum = 0;
  let maxChar = '';

  for(let char in charMap) {
    let num = charMap[char];

    if(num > maxNum) {
      maxNum = num;
      maxChar = char;
    }
  }

  return maxChar;
}