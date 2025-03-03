
class Graph {
constructor() {
this.adjList = new Map();
}
addVertex(vertex) {
if (!this.adjList.has(vertex)) {
this.adjList.set(vertex, []);
}
}
addEdge(vertex, edge) {
this.adjList.get(vertex).push(edge);
}
printGraph() {
for (let [vertex, edges] of this.adjList) {
console.log(vertex + ' -> ' + edges.join(', '));
}
}
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.printGraph();
// Output:
// A -> B, C
// B -> C
// C ->

Explanation:
The graph is modeled as a map of vertices to arrays of adjacent vertices. This structure efficiently represents sparse graphs.
