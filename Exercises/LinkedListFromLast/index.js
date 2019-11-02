// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

/**
 * My initial implementation
 */

module.exports = function fromLast(list, n) {
  // two variables (slow and fast) that will point to the first node in the list
  // then we want to move fast n - 1 amount of times down the list
  // then we move each variable down the list one by one
  // if fast next element is null, then that means slow is pointing to our target

  let slow = list.getFirst();
  let fast = list.getFirst();

  for(let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}