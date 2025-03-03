
const personPrototype = {
greet() {
return `Hello, my name is ${this.name}`;
}
};

function createPerson(name) {
let person = Object.create(personPrototype);
person.name = name;
return person;
}

const person1 = createPerson('Alice');
console.log(person1.greet()); // Output: "Hello, my name is Alice"

Explanation:
By using Object.create, you create a new object that inherits from personPrototype, sharing methods without duplicating code.
