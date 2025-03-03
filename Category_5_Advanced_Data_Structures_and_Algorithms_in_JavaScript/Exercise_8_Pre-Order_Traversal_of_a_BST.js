
BinarySearchTree.prototype.preOrder = function(node = this.root, result = []) {
if (node) {
result.push(node.value);
this.preOrder(node.left, result);
this.preOrder(node.right, result);
}
return result;
};

console.log(bst.preOrder()); // Output: [15, 10, 8, 12, 20]

Explanation:
Pre‑order traversal processes the current node first, then recursively traverses the left and right subtrees. This order is useful for copying the tree.
