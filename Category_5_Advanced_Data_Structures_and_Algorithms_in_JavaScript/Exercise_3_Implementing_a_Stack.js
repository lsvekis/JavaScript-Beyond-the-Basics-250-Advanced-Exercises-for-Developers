
class Stack {
constructor() {
this.items = [];
}
push(element) {
this.items.push(element);
}
pop() {
return this.items.pop();
}
peek() {
return this.items[this.items.length - 1];
}
isEmpty() {
return this.items.length === 0;
}
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // Output: 3
console.log(stack.pop());  // Output: 3
console.log(stack.isEmpty()); // Output: false

Explanation:
A stack follows the Last-In-First-Out (LIFO) principle. We implement it using an array and provide methods to add, remove, and inspect the top element.
