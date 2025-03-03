
class Component {
operation() {
throw new Error('Must implement operation');
}
}

class Leaf extends Component {
constructor(value) {
super();
this.value = value;
}
operation() {
return this.value;
}
}

class Composite extends Component {
constructor() {
super();
this.children = [];
}
add(component) {
this.children.push(component);
}
operation() {
return this.children.map(child => child.operation()).join(' + ');
}
}

const leaf1 = new Leaf('Leaf1');
const leaf2 = new Leaf('Leaf2');
const composite = new Composite();
composite.add(leaf1);
composite.add(leaf2);
console.log(composite.operation()); // Output: "Leaf1 + Leaf2"

Explanation:
The composite pattern lets you build complex structures where clients can treat both individual and grouped objects uniformly.
