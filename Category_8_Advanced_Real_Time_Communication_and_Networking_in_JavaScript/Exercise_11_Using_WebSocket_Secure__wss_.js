
const secureWs = new WebSocket('wss://echo.websocket.events');
secureWs.onopen = () => {
console.log('Secure WebSocket connected.');
secureWs.send('Secure hello!');
};
secureWs.onmessage = (e) => console.log('Secure message:', e.data);

Explanation:
Using the wss:// protocol encrypts data over the network. This exercise demonstrates initiating a secure connection.
