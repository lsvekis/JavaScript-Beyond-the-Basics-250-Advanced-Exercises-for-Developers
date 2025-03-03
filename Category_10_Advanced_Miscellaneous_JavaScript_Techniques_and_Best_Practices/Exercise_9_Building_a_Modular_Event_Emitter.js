
class EventEmitter {
constructor() {
this.events = {};
}
on(event, listener) {
if (!this.events[event]) this.events[event] = [];
this.events[event].push(listener);
return this;
}
emit(event, ...args) {
if (this.events[event]) {
this.events[event].forEach(listener => listener(...args));
}
return this;
}
}
const emitter = new EventEmitter();
emitter.on('data', data => console.log('Received:', data))
.emit('data', 'Hello World');

Explanation:
This pattern encapsulates event handling into a reusable class that supports method chaining.
