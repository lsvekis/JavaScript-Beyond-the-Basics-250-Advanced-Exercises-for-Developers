
BinarySearchTree.prototype.inOrder = function(node = this.root, result = []) {
if (node) {
this.inOrder(node.left, result);
result.push(node.value);
this.inOrder(node.right, result);
}
return result;
};

console.log(bst.inOrder()); // Output: [8, 10, 12, 15, 20]

Explanation:
In‑order traversal visits nodes in ascending order. It recursively traverses the left subtree, processes the node, then the right subtree.
