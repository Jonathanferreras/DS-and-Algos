// --- Directions
// Implement mergeSort

/**
 * My initial implementation
 */


function mergeSort(arr) {

}

function merge(left, right) {
  let results = [];
  while(left.length > 0 && right.length > 0) {
    if(left[0] < right[0]) {
      results.push(left.shift());
    } 
    else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = {mergeSort, merge}