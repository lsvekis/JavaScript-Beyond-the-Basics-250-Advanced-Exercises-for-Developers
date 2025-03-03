Objective:
Implement a basic signaling mechanism for establishing a WebRTC connection using WebSocket.
Code (Signaling Client):

const signalingWs = new WebSocket('wss://echo.websocket.events');
signalingWs.onopen = () => console.log('Signaling WebSocket connected.');

function sendSignal(message) {
signalingWs.send(JSON.stringify(message));
}

signalingWs.onmessage = (e) => {
const signal = JSON.parse(e.data);
console.log('Received signal:', signal);
// Process the signal (offer, answer, or ICE candidate)
};

sendSignal({ type: 'offer', sdp: 'dummy offer SDP' });

Explanation:
In a real‑world application, the signaling server (using WebSocket) exchanges messages (offers, answers, ICE candidates) to establish a WebRTC peer‑to‑peer connection.
