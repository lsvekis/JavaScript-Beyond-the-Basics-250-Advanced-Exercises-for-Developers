
class Animal {
constructor(name) {
this.name = name;
}
speak() {
console.log(`${this.name} makes a sound.`);
}
}

const animal = new Animal('Lion');
animal.speak(); // Output: "Lion makes a sound."

Explanation:
ES6 classes offer a cleaner syntax to create objects and manage inheritance compared to constructor functions.
