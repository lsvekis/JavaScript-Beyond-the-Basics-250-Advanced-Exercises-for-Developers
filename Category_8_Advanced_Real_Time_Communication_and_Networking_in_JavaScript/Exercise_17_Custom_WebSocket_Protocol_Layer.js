
function sendProtocolMessage(ws, type, payload) {
const message = JSON.stringify({ type, payload });
ws.send(message);
}

const protocolWs = new WebSocket('wss://echo.websocket.events');
protocolWs.onopen = () => {
sendProtocolMessage(protocolWs, 'greeting', 'Hello with protocol!');
};

protocolWs.onmessage = (e) => {
const msg = JSON.parse(e.data);
console.log(`Received [${msg.type}]: ${msg.payload}`);
};

Explanation:
This code defines a simple message format (with a type and payload) so that both client and server can structure and process messages consistently.
