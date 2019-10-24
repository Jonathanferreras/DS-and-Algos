// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

module.exports = function anagram(str1, str2) {
  // first we want to remove any non-characters and make chars lowercase
  // then we want to get char maps for both strings
  // then we want to determine which charmap to iterate through
  // 
  const cStr1 = str1.replace(/[^\w]/g, "").toLowerCase();
  const cStr2 = str2.replace(/[^\w]/g, "").toLowerCase();
  const str1CharMap = getCharMap(cStr1);
  const str2CharMap = getCharMap(cStr2);
  const charMap = cStr1.length > cStr2.length ? str1CharMap : str2CharMap;

  for(let char in charMap) {
    if(str1CharMap[char] !== str2CharMap[char]) {
      return false;
    }
  }

  return true;
}

function getCharMap(str) {
  const charMap = {};

  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}


/**
 * Other implementations
 */


// module.exports = function anagram(str1, str2) {
//   const str1CharMap = getCharMap(str1);
//   const str2CharMap = getCharMap(str2);

//   if (Object.keys(str1CharMap).length !== Object.keys(str2CharMap).length) {
//     return false;
//   }

//   for(let char in str1CharMap) {
//     if(str1CharMap[char] !== str2CharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function getCharMap(str) {
//   const charMap = {};

//   for(let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }


// Using sorting

// module.exports = function anagram(str1, str2) {
//   return cleanString(str1) === cleanString(str2);
// }

// function cleanString(str) {
//   return str
//     .replace(/[^\w]/g, "")
//     .split('')
//     .sort()
//     .join('');
// }