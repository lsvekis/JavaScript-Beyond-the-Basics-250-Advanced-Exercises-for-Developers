
async function pollData() {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const data = await response.json();
console.log('Polled update:', data);
setTimeout(pollData, 3000);
} catch (err) {
console.error('Polling error:', err);
setTimeout(pollData, 5000);
}
}

pollData();

Explanation:
Long polling simulates real‑time updates by repeatedly fetching data from the server. This fallback is useful when WebSockets aren’t supported.
