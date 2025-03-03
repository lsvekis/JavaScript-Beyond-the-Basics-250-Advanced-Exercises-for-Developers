
function assert(condition, message) {
if (!condition) {
throw new Error(`Assertion failed: ${message}`);
}
}

// Example usage:
const result = 5 + 3;
assert(result === 8, '5 + 3 should equal 8');

Explanation:
A custom assert function helps catch unexpected conditions early in development, serving as an in-code test to ensure assumptions hold true.
