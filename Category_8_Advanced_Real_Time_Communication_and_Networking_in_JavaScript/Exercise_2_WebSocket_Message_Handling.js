
ws.onopen = () => {
console.log('Connection opened.');
ws.send('Hello, WebSocket!');
};

ws.onmessage = (event) => {
console.log('Received:', event.data);
};

Explanation:
Once the connection is open, a message is sent using ws.send(). The onmessage handler logs any incoming message, which in this case is echoed back by the server.
