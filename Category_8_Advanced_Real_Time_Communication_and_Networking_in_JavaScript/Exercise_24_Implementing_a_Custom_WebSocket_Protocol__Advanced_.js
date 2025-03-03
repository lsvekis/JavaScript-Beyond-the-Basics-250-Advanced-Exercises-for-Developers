
function sendCommand(ws, command, data) {
ws.send(JSON.stringify({ command, data }));
}

ws.onmessage = (e) => {
const { command, data } = JSON.parse(e.data);
switch (command) {
case 'update':
console.log('Update received:', data);
break;
case 'notify':
console.log('Notification:', data);
break;
default:
console.log('Unknown command:', command);
}
};

sendCommand(ws, 'notify', 'This is a notification message.');

Explanation:
By structuring messages with a command field, you can route different actions on the client side based on the type of message received.
