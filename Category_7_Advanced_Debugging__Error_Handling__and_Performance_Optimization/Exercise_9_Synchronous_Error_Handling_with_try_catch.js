
function riskyOperation() {
throw new Error('Something went wrong!');
}

try {
riskyOperation();
} catch (error) {
console.error('Caught error:', error.message);
}

Explanation:
Using try/catch lets you catch and manage exceptions in synchronous code, preventing unexpected crashes.
