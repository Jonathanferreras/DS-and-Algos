// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

/**
 * My initial implementation
 */

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while(node) {
      counter++;
      node = node.next
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while(node && node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if(!this.head) {
      return;
    }
    
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;

    while(node.next) {
      prev = node;
      node = node.next;
    }

    prev.next = null;
  }

  insertLast(data) {
    if(!this.head) {
      this.head = new Node(data, this.head);
      return;
    }

    let node = this.head;

    while(node) {
      if(!node.next) {
        node.next = new Node(data);
        return;
      }
      node = node.next
    }
  }

  getAt(position) {
    let node = this.head;
    let counter = 0;

    while(node) {
      if(counter === position) {
        return node;
      }

      node = node.next;
      counter++;
    }

    return null;
  }

  removeAt(position) {
    if(!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let counter = 0;
    let prev = this.head;
    let node = this.head.next;
    let next = node.next || null;

    while(node) {
      if(counter === position) {
        prev.next = next;
        return;
      }

      counter++;
      prev = node;
      node = node.next;
      next = node.next;
    }
  }

  insertAt(data, position) {}

  forEach(fn) {}
}

module.exports = {
  Node,
  LinkedList
}