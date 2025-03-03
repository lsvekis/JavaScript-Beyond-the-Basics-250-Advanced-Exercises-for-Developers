
class Queue {
constructor() {
this.items = [];
}
enqueue(element) {
this.items.push(element);
}
dequeue() {
return this.items.shift();
}
front() {
return this.items[0];
}
isEmpty() {
return this.items.length === 0;
}
}

const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
console.log(queue.front());  // Output: "A"
console.log(queue.dequeue()); // Output: "A"
console.log(queue.isEmpty()); // Output: false

Explanation:
A queue operates on a First-In-First-Out (FIFO) basis. The enqueue method adds an element to the end, while dequeue removes from the front.
