
class PriorityQueue {
constructor() {
this.items = [];
}
enqueue(element, priority) {
const queueElement = { element, priority };
let added = false;
for (let i = 0; i < this.items.length; i++) {
if (queueElement.priority < this.items[i].priority) {
this.items.splice(i, 0, queueElement);
added = true;
break;
}
}
if (!added) {
this.items.push(queueElement);
}
}
dequeue() {
return this.items.shift();
}
}

const pq = new PriorityQueue();
pq.enqueue('Low Priority', 5);
pq.enqueue('High Priority', 1);
pq.enqueue('Medium Priority', 3);
console.log(pq.dequeue().element); // Output: "High Priority"

Explanation:
In a priority queue, each item is stored with a priority value. The lower the priority number, the higher its importance, so it’s dequeued first.
