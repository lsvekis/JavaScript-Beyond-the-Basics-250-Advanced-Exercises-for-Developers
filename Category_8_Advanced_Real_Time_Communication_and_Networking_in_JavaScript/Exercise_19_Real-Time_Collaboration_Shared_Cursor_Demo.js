Objective:
Simulate a shared cursor among multiple clients using WebSocket.
Code (Client-Side):

document.addEventListener('mousemove', (e) => {
const coords = { x: e.clientX, y: e.clientY };
ws.send(JSON.stringify({ type: 'cursor', coords }));
});

ws.onmessage = (e) => {
const data = JSON.parse(e.data);
if (data.type === 'cursor') {
// In a real app, update the position of a remote cursor element
console.log('Remote cursor at:', data.coords);
}
};

Explanation:
This demo sends the mouse coordinates over WebSocket so that multiple clients can see each other’s cursor positions in real time.
