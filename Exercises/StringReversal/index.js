/**
 * Instructions:
 * 
 * Given a string, return a new string with the reversed order of characters.
 * 
 * -- Example --
 * reverse('apple') === 'elppa'
 * reverse(''hello') === 'olleh'
 * 
 */



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