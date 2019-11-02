// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

/**
 * My initial implementation
 */

module.exports = function midpoint(list) {
  // two variables, slow and fast
  // both will start by pointing to the first node in the list
  // point slow to every node at a time
  // point fast to every other node at a time if those nodes exist
  let slow = list.head;
  let fast = list.head;
  let mid = slow;

  while(fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
    mid = slow;
  }

  return mid;
}