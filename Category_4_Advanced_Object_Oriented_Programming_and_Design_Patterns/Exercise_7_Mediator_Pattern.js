
class Mediator {
constructor() {
this.colleagues = [];
}
register(colleague) {
this.colleagues.push(colleague);
colleague.mediator = this;
}
send(message, sender) {
this.colleagues.forEach(colleague => {
if (colleague !== sender) {
colleague.receive(message);
}
});
}
}

class Colleague {
constructor(name) {
this.name = name;
this.mediator = null;
}
send(message) {
this.mediator.send(message, this);
}
receive(message) {
console.log(`${this.name} received: ${message}`);
}
}

const mediator = new Mediator();
const col1 = new Colleague('Colleague1');
const col2 = new Colleague('Colleague2');
mediator.register(col1);
mediator.register(col2);
col1.send('Hello');
// Output: "Colleague2 received: Hello"

Explanation:
The Mediator pattern reduces direct dependencies between objects by having them communicate via a mediator.
