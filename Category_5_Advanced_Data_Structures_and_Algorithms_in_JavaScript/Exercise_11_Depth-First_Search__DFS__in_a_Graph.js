
function dfs(graph, start, visited = new Set()) {
visited.add(start);
console.log(start);
const neighbors = graph.adjList.get(start) || [];
for (let neighbor of neighbors) {
if (!visited.has(neighbor)) {
dfs(graph, neighbor, visited);
}
}
}

dfs(graph, 'A');
// Possible Output: A, B, C

Explanation:
DFS recursively visits nodes, marking them as visited to avoid cycles. It explores as far as possible along each branch before backtracking.
