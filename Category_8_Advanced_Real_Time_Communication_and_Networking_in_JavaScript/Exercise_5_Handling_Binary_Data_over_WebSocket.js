
const binaryWs = new WebSocket('wss://echo.websocket.events');
binaryWs.binaryType = 'arraybuffer';

binaryWs.onopen = () => {
const buffer = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
binaryWs.send(buffer);
};

binaryWs.onmessage = (event) => {
const received = new Uint8Array(event.data);
console.log('Received binary data:', received);
};

Explanation:
This exercise demonstrates setting the binaryType to 'arraybuffer' to handle binary data. A Uint8Array is sent, and the echo is converted back for logging.
