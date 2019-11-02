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
    // My implementation
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

    //other implementation
    // const last = this.getLast();

    // if(last) {
    //   last.next = new Node(data);
    // }
    // else {
    //   this.head = new Node(data);
    // }
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
    // get position before position we want to remove
    // if not null then check to see if next node is not null
    // if not null, then  grab the node ahead of that one
    /**
     * My attempted implementation
     */
    // let node = this.getAt(position - 1);

    // if(!node) {
    //   return;
    // }

    // if(!node.next) {
    //   return;
    // }

    // node.next = node.next.next;


    /**
     * other implemetation
     */
    if(!this.head) {
      return;
    }

    if(position === 0) {
      this.head = this.head.next;
      return;
    }

    const before = this.getAt(position - 1);
    if(!before || !before.next) {
      return;
    }

    before.next = before.next.next;
  }

  insertAt(data, position) {
    let node = new Node(data);

    if(!this.head) {
      this.head = node;
      return;
    }

    let prevNode = this.getAt(position - 1);

    if(!prevNode.next) {
      prevNode.next = node;
    }

    const save = prevNode.next;
    prevNode.next = node;
    prevNode.next.next = save;
  }

  forEach(fn) {}
}

module.exports = {
  Node,
  LinkedList
}