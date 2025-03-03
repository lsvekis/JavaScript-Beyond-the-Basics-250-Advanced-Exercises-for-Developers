
// lib.js
export function usedFunction() {
return 'I am used';
}
export function unusedFunction() {
return 'I am unused';
}


// main.js
import { usedFunction } from './lib.js';
console.log(usedFunction());
// In a bundler with tree shaking, unusedFunction would be omitted.

Explanation:
While tree shaking is performed by bundlers, this exercise illustrates the importance of exporting only what is needed.
