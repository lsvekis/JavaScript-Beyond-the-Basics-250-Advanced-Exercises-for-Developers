
const peerConnection = new RTCPeerConnection();
const dataChannel = peerConnection.createDataChannel('chat');

dataChannel.onopen = () => console.log('Data channel open.');
dataChannel.onmessage = (e) => console.log('Data channel message:', e.data);

// Create and set offer (simplified; signaling omitted)
peerConnection.createOffer().then(offer => {
return peerConnection.setLocalDescription(offer);
}).then(() => {
console.log('Local description set. Send this offer via signaling.');
});

Explanation:
This exercise demonstrates creating a data channel on a WebRTC peer connection. In practice, signaling would exchange SDP offers/answers between peers.
