// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/**
 * My implementation
 */

module.exports = function arrayChunks(arr, chunkSize) {
  // we want to create an empty array
  // loop through provided array
  // create a sub array and fill till size of chunk size or if there is not more numbers to iterate
  
  let chunks = [];
  let chunk = [];

  for(let i = 0; i < arr.length; i++) {
    chunk.push(arr[i]);

    if(chunk.length === chunkSize || !arr[i+1]) {
      chunks.push(chunk);
      chunk = [];
    }
  }

  return chunks;
}