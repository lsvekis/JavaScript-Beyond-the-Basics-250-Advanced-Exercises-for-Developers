
class EventBus {
constructor() {
this.listeners = {};
}
on(event, callback) {
if (!this.listeners[event]) {
this.listeners[event] = [];
}
this.listeners[event].push(callback);
}
off(event, callback) {
if (this.listeners[event]) {
this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
}
}
emit(event, data) {
if (this.listeners[event]) {
this.listeners[event].forEach(cb => cb(data));
}
}
}

const bus = new EventBus();
const logEvent = data => console.log('EventBus:', data);
bus.on('update', logEvent);
bus.emit('update', 'Data updated'); // Output: "EventBus: Data updated"
bus.off('update', logEvent);
bus.emit('update', 'Data updated again'); // No output

Explanation:
This version of the Observer pattern, often called an event bus, centralizes communication and decouples components by handling events in one place.
