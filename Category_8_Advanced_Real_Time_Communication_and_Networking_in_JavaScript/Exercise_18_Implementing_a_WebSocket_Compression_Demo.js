
// For demo purposes, we simulate compression by using Base64 encoding.
function compress(text) {
return btoa(text);
}
function decompress(text) {
return atob(text);
}

const compWs = new WebSocket('wss://echo.websocket.events');
compWs.onopen = () => {
const compressedMessage = compress('This is a compressed message.');
compWs.send(compressedMessage);
};

compWs.onmessage = (e) => {
const original = decompress(e.data);
console.log('Decompressed message:', original);
};

Explanation:
While real compression involves binary data, this example uses Base64 encoding/decoding to demonstrate the concept of compressing data before sending over WebSocket.
