
class DoublyNode {
constructor(value) {
this.value = value;
this.next = null;
this.prev = null;
}
}

class DoublyLinkedList {
constructor() {
this.head = null;
this.tail = null;
}
append(value) {
const newNode = new DoublyNode(value);
if (!this.head) {
this.head = newNode;
this.tail = newNode;
return;
}
this.tail.next = newNode;
newNode.prev = this.tail;
this.tail = newNode;
}
displayForward() {
let current = this.head;
const values = [];
while (current) {
values.push(current.value);
current = current.next;
}
return values.join(' -> ');
}
displayBackward() {
let current = this.tail;
const values = [];
while (current) {
values.push(current.value);
current = current.prev;
}
return values.join(' -> ');
}
}

const dList = new DoublyLinkedList();
dList.append(5);
dList.append(15);
dList.append(25);
console.log(dList.displayForward());  // Output: "5 -> 15 -> 25"
console.log(dList.displayBackward()); // Output: "25 -> 15 -> 5"

Explanation:
A doubly linked list keeps pointers to both the next and previous nodes, enabling reverse traversal. Two display methods show the list in forward and backward directions.
