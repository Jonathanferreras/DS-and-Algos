// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

/**
 * My implementations
 */

module.exports = class Queue {
  constructor() {
    this.queue = [];
  }

  add(item) {
    this.queue.unshift(item);
  }

  remove() {
    return this.queue.pop();
  }

  peek() {
    const last = this.queue.length - 1;

    return this.queue[last];
  }
}