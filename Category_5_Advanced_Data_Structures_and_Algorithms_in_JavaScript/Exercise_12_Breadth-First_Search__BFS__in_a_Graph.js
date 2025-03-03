
function bfs(graph, start) {
const visited = new Set();
const queue = [start];
visited.add(start);
while (queue.length) {
const vertex = queue.shift();
console.log(vertex);
const neighbors = graph.adjList.get(vertex) || [];
for (let neighbor of neighbors) {
if (!visited.has(neighbor)) {
visited.add(neighbor);
queue.push(neighbor);
}
}
}
}

bfs(graph, 'A');
// Possible Output: A, B, C

Explanation:
BFS uses a queue to visit nodes in layers. This is ideal for finding the shortest path in an unweighted graph.
