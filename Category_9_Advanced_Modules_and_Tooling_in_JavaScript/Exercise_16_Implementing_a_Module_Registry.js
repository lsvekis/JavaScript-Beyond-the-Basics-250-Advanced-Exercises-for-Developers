
const moduleRegistry = new Map();
export function registerModule(name, module) {
moduleRegistry.set(name, module);
}
export function getModule(name) {
return moduleRegistry.get(name);
}


// main.js
import { registerModule, getModule } from './moduleRegistry.js';
import * as math from './math.js';
registerModule('math', math);
console.log('Registered add:', getModule('math').add(10, 15));

Explanation:
A module registry helps centralize module management, useful in plugin architectures.
