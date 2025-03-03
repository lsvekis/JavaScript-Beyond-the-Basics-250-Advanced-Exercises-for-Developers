
// greet.js
export default function greet(name) {
return `Hello, ${name}!`;
}
export const farewell = name => `Goodbye, ${name}!`;


// main.js
import greet, { farewell } from './greet.js';
console.log(greet('Alice'));       // Output: "Hello, Alice!"
console.log(farewell('Alice'));    // Output: "Goodbye, Alice!"

Explanation:
Default exports can be imported without curly braces, while named exports require them.
