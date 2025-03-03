
function connectWebSocket() {
const ws = new WebSocket('wss://echo.websocket.events');

ws.onopen = () => console.log('Connected to WebSocket.');
ws.onmessage = (e) => console.log('Message:', e.data);
ws.onclose = () => {
console.log('Connection closed. Reconnecting in 3 seconds...');
setTimeout(connectWebSocket, 3000);
};
ws.onerror = (error) => console.error('WebSocket error:', error);
}

connectWebSocket();

Explanation:
When the connection closes, the onclose handler schedules a reconnection after 3 seconds, ensuring resilience against transient network issues.
