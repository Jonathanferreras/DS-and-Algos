module.exports = class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.unshift(item);
  }

  pop() {
    return this.stack.shift();
  }

  peek() {
    return this.stack[0];
  }

}