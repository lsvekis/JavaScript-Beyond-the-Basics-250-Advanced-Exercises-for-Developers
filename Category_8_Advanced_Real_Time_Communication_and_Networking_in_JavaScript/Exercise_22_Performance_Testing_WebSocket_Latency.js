
ws.onopen = () => {
const startTime = Date.now();
ws.send('ping');
ws.onmessage = () => {
const rtt = Date.now() - startTime;
console.log('Round-trip time:', rtt, 'ms');
};
};

Explanation:
Sending a “ping” message and measuring the time until the echo response allows you to calculate the network latency over WebSocket.
