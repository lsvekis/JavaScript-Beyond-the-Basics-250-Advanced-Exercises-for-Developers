
class Node {
constructor(value) {
this.value = value;
this.next = null;
}
}

class LinkedList {
constructor() {
this.head = null;
}
append(value) {
const newNode = new Node(value);
if (!this.head) {
this.head = newNode;
return;
}
let current = this.head;
while (current.next) {
current = current.next;
}
current.next = newNode;
}
display() {
let current = this.head;
const values = [];
while (current) {
values.push(current.value);
current = current.next;
}
return values.join(' -> ');
}
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
console.log(list.display()); // Output: "10 -> 20 -> 30"

Explanation:
We define a Node class to represent each element. The LinkedList class manages the list with an append method to add nodes at the end and a display method to visualize the list.
