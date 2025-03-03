
function EventEmitter() {
const events = {};
return {
on: function(event, listener) {
if (!events[event]) {
events[event] = [];
}
events[event].push(listener);
},
emit: function(event, ...args) {
if (events[event]) {
events[event].forEach(listener => listener(...args));
}
}
};
}

const emitter = EventEmitter();
emitter.on('greet', name => console.log(`Hello, ${name}!`));
emitter.emit('greet', 'Alice'); // Output: "Hello, Alice!"

Explanation:
The EventEmitter uses a closure to keep track of events and their listeners, providing a simple pub/sub mechanism.
