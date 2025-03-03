
class EventAggregator {
constructor() {
this.events = {};
}
subscribe(event, listener) {
if (!this.events[event]) {
this.events[event] = [];
}
this.events[event].push(listener);
}
publish(event, data) {
if (this.events[event]) {
this.events[event].forEach(listener => listener(data));
}
}
unsubscribe(event, listener) {
if (this.events[event]) {
this.events[event] = this.events[event].filter(l => l !== listener);
}
}
}

const aggregator = new EventAggregator();
const listener = data => console.log(`Event received: ${data}`);
aggregator.subscribe('test', listener);
aggregator.publish('test', 'Hello Aggregator'); // Output: "Event received: Hello Aggregator"
aggregator.unsubscribe('test', listener);
aggregator.publish('test', 'Hello Again'); // No output

Explanation:
The Event Aggregator pattern decouples event publishers from subscribers by using a central hub to manage events.
