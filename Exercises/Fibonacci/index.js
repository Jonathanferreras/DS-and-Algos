  
// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


/**
 * My implementation
 */


module.exports = function fibonacci(n) {
  // we start from 1 because 0 and 1 are the first two in the seq
  // the next number is based on the previous number and the one before that one

  let seq = [0, 1];

  for(let i = 1; i < n; i++) {
    seq.push(seq[i] + seq[i-1])
  }

  return seq[n]
}


/**
 * Other implementations
 */


// Using recursion (my attempt, failed to finish. was able to produce seq but had trouble returning the value)

// module.exports = function fibonacci(n, arr = [0,1], counter = 1) {
//   // if arr length > n return

//   if(counter === n) {
//     return arr;
//   }

//   if(arr.length > n) {
//     return fibonacci(n, arr, counter)
//   }

//   arr.push(arr[counter] + arr[counter - 1]);

//   fibonacci(n, arr, counter++)
// }


// Using recursion

// module.exports = function fibonacci(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fibonacci(n - 1) + fibonacci(n - 2);
// }