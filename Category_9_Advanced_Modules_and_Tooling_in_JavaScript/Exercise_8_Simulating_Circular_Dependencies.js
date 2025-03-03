
// moduleA.js
import { funcB } from './moduleB.js';
export function funcA() {
return 'A calls ' + funcB();
}


// moduleB.js
import { funcA } from './moduleA.js';
export function funcB() {
return 'B (and ' + (funcA ? 'A exists' : 'A missing') + ')';
}


// main.js
import { funcA } from './moduleA.js';
console.log(funcA());

Explanation:
Circular dependencies can work if managed carefully. (Be aware that order of execution matters.)
