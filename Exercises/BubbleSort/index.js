// --- Directions
// Implement bubbleSort

/**
 * My initial implementation
 */


module.exports = function bubbleSort(arr) {
  // iterate through each item
  // on each iteration we are going to check and swap values with the next
  // if the number is greater

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }

  return arr;
}