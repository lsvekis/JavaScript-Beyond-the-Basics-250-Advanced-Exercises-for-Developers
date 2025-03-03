
// Simulate player movement updates
setInterval(() => {
const playerUpdate = {
id: 'player1',
x: Math.floor(Math.random() * 800),
y: Math.floor(Math.random() * 600)
};
ws.send(JSON.stringify({ type: 'playerUpdate', data: playerUpdate }));
}, 1000);

ws.onmessage = (e) => {
const message = JSON.parse(e.data);
if (message.type === 'playerUpdate') {
console.log('Player update received:', message.data);
// In a game, update the player sprite position accordingly
}
};

Explanation:
This final exercise simulates a multiplayer game scenario where a client sends periodic player position updates. On receiving updates, the game would update player positions on screen in real time.

This concludes Category 8: Advanced Real‑Time Communication and Networking in JavaScript with 25 exercises. Each exercise covers a key aspect of real‑time data transfer and network communication, empowering you to build robust, interactive, and scalable real‑time applications using vanilla JavaScript.

In this category you’ll explore native ES modules, dynamic imports, lazy loading, and techniques for organizing and “bundling” your code without external libraries. These exercises demonstrate how to structure code into reusable modules, leverage dynamic module loading, and implement patterns that underpin modern tooling—all with vanilla JavaScript.
