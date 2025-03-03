
const tests = [];

function test(description, fn) {
tests.push({ description, fn });
}

function runTests() {
tests.forEach(({ description, fn }) => {
try {
fn();
console.log(`✔ ${description}`);
} catch (error) {
console.error(`✖ ${description}`);
console.error('   ', error.message);
}
});
}

// Example tests:
test('Addition works correctly', () => {
assert(2 + 2 === 4, '2 + 2 should be 4');
});

test('Subtraction works correctly', () => {
assert(5 - 3 === 2, '5 - 3 should be 2');
});

runTests();

Explanation:
This simple test runner collects test functions and executes them, logging successes and failures. It demonstrates a basic approach to unit testing without external libraries.
