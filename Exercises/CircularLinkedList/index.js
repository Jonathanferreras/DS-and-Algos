// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true


/**
 * My initial implementation
 */

module.exports = function isCircular(list) {
  // use slow/fast variable solution
  // where slow will point to every node at a time
  // and fast will point to every other node if they exist
  // confirm if list is circular if both variables are looking at the same node

  let slow = list.getFirst();
  let fast = list.getFirst();

  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next

    if(slow.data === fast.data) {
        return true;
    }
  }

  return false;
}