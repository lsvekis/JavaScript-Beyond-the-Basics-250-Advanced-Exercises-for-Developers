
// eventEmitter.js
const listeners = new Map();
export function on(event, callback) {
if (!listeners.has(event)) listeners.set(event, []);
listeners.get(event).push(callback);
}
export function emit(event, data) {
if (listeners.has(event)) {
listeners.get(event).forEach(cb => cb(data));
}
}


// main.js
import { on, emit } from './eventEmitter.js';
on('greet', msg => console.log('Received:', msg));
emit('greet', 'Hello from module!');

Explanation:
Encapsulating event handling in a module promotes reusability and separation of concerns.
