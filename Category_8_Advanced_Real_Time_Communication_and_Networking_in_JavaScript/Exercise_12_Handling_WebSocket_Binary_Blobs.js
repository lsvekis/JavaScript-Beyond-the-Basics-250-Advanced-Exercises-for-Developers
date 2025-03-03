
const blobWs = new WebSocket('wss://echo.websocket.events');
blobWs.binaryType = 'blob';

blobWs.onopen = () => {
const blob = new Blob(['Hello Blob'], { type: 'text/plain' });
blobWs.send(blob);
};

blobWs.onmessage = (e) => {
e.data.text().then(text => console.log('Received blob text:', text));
};

Explanation:
This example shows how to send a Blob object and process the received Blob by converting it to text.
