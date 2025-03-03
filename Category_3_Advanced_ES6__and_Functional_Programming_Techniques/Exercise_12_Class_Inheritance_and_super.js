
class Animal {
constructor(name) {
this.name = name;
}
speak() {
console.log(`${this.name} makes a sound.`);
}
}

class Dog extends Animal {
constructor(name, breed) {
super(name);
this.breed = breed;
}
speak() {
console.log(`${this.name} barks.`);
}
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak(); // Output: "Buddy barks."

Explanation:
The extends keyword creates a subclass, and super calls the parent class constructor, ensuring proper inheritance.
