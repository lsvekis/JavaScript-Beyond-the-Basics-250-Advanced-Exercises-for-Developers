
class State {
handle(context) {
throw new Error('Must implement handle');
}
}

class ConcreteStateA extends State {
handle(context) {
console.log('State A handling request, switching to State B');
context.state = new ConcreteStateB();
}
}

class ConcreteStateB extends State {
handle(context) {
console.log('State B handling request, switching to State A');
context.state = new ConcreteStateA();
}
}

class Context {
constructor(state) {
this.state = state;
}
request() {
this.state.handle(this);
}
}

const context = new Context(new ConcreteStateA());
context.request(); // Output: "State A handling request, switching to State B"
context.request(); // Output: "State B handling request, switching to State A"

Explanation:
The State pattern encapsulates state-specific behavior into separate state classes and allows the context to switch between them.
