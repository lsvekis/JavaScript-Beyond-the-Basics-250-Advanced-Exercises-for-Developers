
const ws = new WebSocket('wss://echo.websocket.events');

ws.onopen = () => {
console.log('WebSocket connection established.');
};

ws.onerror = (error) => {
console.error('WebSocket error:', error);
};

ws.onclose = () => {
console.log('WebSocket connection closed.');
};

Explanation:
This exercise creates a WebSocket connection to a public echo server. The onopen, onerror, and onclose event handlers log connection status, demonstrating how to initiate and monitor a WebSocket connection.
