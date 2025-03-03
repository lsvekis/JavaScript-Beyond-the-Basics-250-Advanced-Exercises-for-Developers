
async function longPoll() {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const data = await response.json();
console.log('Polled data:', data);
// Immediately start next poll
longPoll();
} catch (error) {
console.error('Polling error:', error);
setTimeout(longPoll, 3000); // Retry after delay
}
}

longPoll();

Explanation:
Long polling continuously fetches data from the server. When one request completes, the next begins immediately, simulating a push mechanism.
