
async function safeAsync(fn) {
try {
return await fn();
} catch (error) {
console.error('Async error:', error);
return null;
}
}

// Example usage:
async function fetchData() {
throw new Error('Fetch failed');
}

safeAsync(fetchData).then(result => console.log('Result:', result));

Explanation:
A wrapper like safeAsync centralizes error handling for asynchronous functions, making your code cleaner and more robust.
