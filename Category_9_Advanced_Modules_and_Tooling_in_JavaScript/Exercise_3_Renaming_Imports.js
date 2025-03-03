
// utils.js
export function multiply(a, b) {
return a * b;
}


// main.js
import { multiply as mul } from './utils.js';
console.log('3 * 4 =', mul(3, 4)); // Output: 3 * 4 = 12

Explanation:
Using the as keyword allows you to alias an import to a different name.
