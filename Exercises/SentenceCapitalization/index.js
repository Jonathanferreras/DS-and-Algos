// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


/**
 * My implementation
 */

module.exports = function capitalize(sentence) {
  return sentence
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}


/**
 * Other implementation
 */


// without map method

// module.exports = function capitalize(sentence) {
//   const words = [];

//   for(let word of sentence.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(' ');
// }


// for loop

// module.exports = function capitalize(sentence) {
//   let result = sentence[0].toUpperCase();

//   for(let i = 1; i < sentence.length; i++) {
//     result += (sentence[i - 1] === ' ') ? sentence[i].toUpperCase() : sentence[i]
//   }

//   return result;
// }