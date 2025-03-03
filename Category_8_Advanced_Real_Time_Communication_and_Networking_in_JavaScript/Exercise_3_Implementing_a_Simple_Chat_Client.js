<!-- index.html -->
<input id="chatInput" type="text" placeholder="Type a message...">
<button id="sendBtn">Send</button>
<div id="chatLog"></div>
<script>
const ws = new WebSocket('wss://echo.websocket.events');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatLog = document.getElementById('chatLog');

ws.onmessage = (e) => {
const msg = document.createElement('p');
msg.textContent = `Server: ${e.data}`;
chatLog.appendChild(msg);
};

sendBtn.addEventListener('click', () => {
const text = chatInput.value;
if (text) {
ws.send(text);
const msg = document.createElement('p');
msg.textContent = `You: ${text}`;
chatLog.appendChild(msg);
chatInput.value = '';
}
});
</script>

Explanation:
This example creates a basic chat interface. Users can type messages that are sent via WebSocket, and responses (echoed by the server) are appended to a chat log.
