
BinarySearchTree.prototype.postOrder = function(node = this.root, result = []) {
if (node) {
this.postOrder(node.left, result);
this.postOrder(node.right, result);
result.push(node.value);
}
return result;
};

console.log(bst.postOrder()); // Output: [8, 12, 10, 20, 15]

Explanation:
Post‑order traversal visits all children before processing the node itself, which is useful for deletion operations.
