
class BSTNode {
constructor(value) {
this.value = value;
this.left = null;
this.right = null;
}
}

class BinarySearchTree {
constructor() {
this.root = null;
}
insert(value) {
const newNode = new BSTNode(value);
if (!this.root) {
this.root = newNode;
return;
}
let current = this.root;
while (true) {
if (value < current.value) {
if (!current.left) {
current.left = newNode;
return;
}
current = current.left;
} else {
if (!current.right) {
current.right = newNode;
return;
}
current = current.right;
}
}
}
search(value) {
let current = this.root;
while (current) {
if (value === current.value) return true;
current = value < current.value ? current.left : current.right;
}
return false;
}
}

const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.insert(8);
bst.insert(12);
console.log(bst.search(10)); // Output: true
console.log(bst.search(99)); // Output: false

Explanation:
A BST organizes data in a way that allows for efficient insertion and searching. Nodes to the left are less than the parent; nodes to the right are greater.
