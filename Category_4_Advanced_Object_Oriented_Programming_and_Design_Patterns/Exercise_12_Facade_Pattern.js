
class SubsystemA {
operationA() {
return 'A';
}
}

class SubsystemB {
operationB() {
return 'B';
}
}

class Facade {
constructor() {
this.a = new SubsystemA();
this.b = new SubsystemB();
}
operation() {
return `Facade: ${this.a.operationA()} ${this.b.operationB()}`;
}
}

const facade = new Facade();
console.log(facade.operation()); // Output: "Facade: A B"

Explanation:
The facade hides the complexities of subsystems by providing a simple, unified interface.
