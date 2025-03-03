
function logWithTime(message) {
const now = new Date().toLocaleTimeString();
console.log(`[${now}] ${message}`);
}

logWithTime('This is a timed log message.');

Explanation:
Adding timestamps to log messages provides context on when events occurred, which is especially helpful for debugging asynchronous code.
