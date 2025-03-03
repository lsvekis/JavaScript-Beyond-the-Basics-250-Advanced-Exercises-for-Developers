
class ReconnectingWebSocket {
constructor(url) {
this.url = url;
this.queue = [];
this.connect();
}
connect() {
this.ws = new WebSocket(this.url);
this.ws.onopen = () => {
console.log('ReconnectingWebSocket connected.');
this.queue.forEach(msg => this.ws.send(msg));
this.queue = [];
};
this.ws.onclose = () => {
console.log('Connection lost. Reconnecting...');
setTimeout(() => this.connect(), 3000);
};
this.ws.onmessage = (e) => console.log('Message:', e.data);
}
send(message) {
if (this.ws.readyState === WebSocket.OPEN) {
this.ws.send(message);
} else {
this.queue.push(message);
}
}
}

const rws = new ReconnectingWebSocket('wss://echo.websocket.events');
rws.send('Test message');

Explanation:
This wrapper class handles reconnections and queues messages sent while the connection is not yet open, providing a robust abstraction over raw WebSocket usage.
