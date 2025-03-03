
// math.js
export function add(a, b) {
return a + b;
}


// main.js
import { add } from './math.js';
console.log('2 + 3 =', add(2, 3)); // Output: 2 + 3 = 5

Explanation:
This demonstrates a basic ES module where a function is exported from one file and imported in another.
