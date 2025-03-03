
function assertEqual(actual, expected, message = '') {
if (actual !== expected) {
throw new Error(`Assertion failed: ${message} Expected ${expected}, got ${actual}`);
}
}
assertEqual(2 + 2, 4, 'Math works correctly');
console.log('Assertion passed.');

Explanation:
A custom assertion library enables you to write inline tests and verify code correctness during development.
