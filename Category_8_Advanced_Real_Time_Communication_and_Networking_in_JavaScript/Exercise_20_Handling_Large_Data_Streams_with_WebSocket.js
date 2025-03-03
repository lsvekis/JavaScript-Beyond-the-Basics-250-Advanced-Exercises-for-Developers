
let accumulatedData = '';
ws.onmessage = (e) => {
accumulatedData += e.data;
if (accumulatedData.endsWith('<EOF>')) {
console.log('Complete data received:', accumulatedData.replace('<EOF>', ''));
accumulatedData = '';
}
};

// On sender side, data is split into chunks and '<EOF>' appended at the end.

Explanation:
When transferring large messages, splitting data into chunks and detecting an end‑of‑file marker (<EOF>) helps to reconstruct the full message.
