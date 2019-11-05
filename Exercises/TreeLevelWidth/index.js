// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]


/**
 * My initial implementation
 */

module.exports = function levelWidth(root) {
  const arr = [root, 'marker'];
  const levels = [0];

  while(arr.length > 1) {
    const node = arr.shift();

    if(node === 'marker') {
      arr.push(node);
      levels.push(0);
    } 
    else {
      levels[levels.length - 1]++;
      arr.push(...node.children);
    }
  }

  return levels;
}