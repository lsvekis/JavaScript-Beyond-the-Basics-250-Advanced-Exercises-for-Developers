
// testMath.js
import { add } from './math.js';
function testAdd() {
if (add(2, 3) !== 5) throw new Error('add function failed');
console.log('add function passed');
}
testAdd();

Explanation:
Writing tests for modules ensures that individual components work as expected.
