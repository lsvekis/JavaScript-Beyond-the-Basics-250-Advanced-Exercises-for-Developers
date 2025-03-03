
class WeightedGraph {
constructor() {
this.adjList = new Map();
}
addVertex(vertex) {
if (!this.adjList.has(vertex)) {
this.adjList.set(vertex, []);
}
}
addEdge(vertex, neighbor, weight) {
this.adjList.get(vertex).push({ node: neighbor, weight });
}
dijkstra(start) {
const distances = {};
const visited = new Set();
const pq = new PriorityQueue();

for (let vertex of this.adjList.keys()) {
distances[vertex] = vertex === start ? 0 : Infinity;
}
pq.enqueue(start, 0);

while (pq.items.length) {
const { element: current } = pq.dequeue();
visited.add(current);

for (let neighbor of this.adjList.get(current)) {
if (visited.has(neighbor.node)) continue;
const newDist = distances[current] + neighbor.weight;
if (newDist < distances[neighbor.node]) {
distances[neighbor.node] = newDist;
pq.enqueue(neighbor.node, newDist);
}
}
}
return distances;
}
}

// Reuse PriorityQueue from Exercise 5
const wGraph = new WeightedGraph();
wGraph.addVertex('A');
wGraph.addVertex('B');
wGraph.addVertex('C');
wGraph.addEdge('A', 'B', 1);
wGraph.addEdge('A', 'C', 4);
wGraph.addEdge('B', 'C', 2);
console.log(wGraph.dijkstra('A'));
// Output: { A: 0, B: 1, C: 3 }

Explanation:
Dijkstra’s algorithm finds the shortest path in a weighted graph. A priority queue is used to select the next closest vertex.
