
class Subject {
constructor() {
this.observers = [];
}
subscribe(observer) {
this.observers.push(observer);
}
unsubscribe(observer) {
this.observers = this.observers.filter(obs => obs !== observer);
}
notify(data) {
this.observers.forEach(observer => observer.update(data));
}
}

class Observer {
constructor(name) {
this.name = name;
}
update(data) {
console.log(`${this.name} received data: ${data}`);
}
}

const subject = new Subject();
const observer1 = new Observer('Observer1');
const observer2 = new Observer('Observer2');
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify('New Data');
// Outputs:
// Observer1 received data: New Data
// Observer2 received data: New Data

Explanation:
The Observer pattern decouples the subject (which holds state) from the observers that react to state changes.
