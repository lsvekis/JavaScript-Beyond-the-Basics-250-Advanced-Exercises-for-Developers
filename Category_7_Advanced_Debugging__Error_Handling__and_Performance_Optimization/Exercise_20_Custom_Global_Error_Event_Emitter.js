
class EventEmitter {
constructor() {
this.events = {};
}
on(event, listener) {
if (!this.events[event]) {
this.events[event] = [];
}
this.events[event].push(listener);
}
emit(event, data) {
if (this.events[event]) {
this.events[event].forEach(listener => listener(data));
}
}
}

const errorEmitter = new EventEmitter();
errorEmitter.on('error', data => {
console.error('Global Error Event:', data);
});

// Later in your code:
errorEmitter.emit('error', 'A critical error occurred!');

Explanation:
This event emitter provides a centralized way to dispatch and handle error events, promoting better separation of error logging logic.
