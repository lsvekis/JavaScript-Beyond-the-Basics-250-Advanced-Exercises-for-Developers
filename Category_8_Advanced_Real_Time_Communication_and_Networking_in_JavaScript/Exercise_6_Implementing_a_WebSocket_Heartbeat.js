
let heartbeatInterval;
function startHeartbeat(ws) {
heartbeatInterval = setInterval(() => {
if (ws.readyState === WebSocket.OPEN) {
ws.send(JSON.stringify({ type: 'heartbeat', timestamp: Date.now() }));
console.log('Heartbeat sent.');
}
}, 5000);
}

const wsHeartbeat = new WebSocket('wss://echo.websocket.events');
wsHeartbeat.onopen = () => startHeartbeat(wsHeartbeat);
wsHeartbeat.onclose = () => clearInterval(heartbeatInterval);

Explanation:
This example sends a heartbeat message every 5 seconds to ensure the connection remains active. Clearing the interval on close prevents unnecessary attempts.
