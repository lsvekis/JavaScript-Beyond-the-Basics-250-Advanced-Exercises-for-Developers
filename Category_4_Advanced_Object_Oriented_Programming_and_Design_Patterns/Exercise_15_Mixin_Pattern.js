
let canEat = {
eat() {
console.log('Eating');
}
};

let canWalk = {
walk() {
console.log('Walking');
}
};

class Person {
constructor(name) {
this.name = name;
}
}

Object.assign(Person.prototype, canEat, canWalk);

const person = new Person('John');
person.eat();  // Output: "Eating"
person.walk(); // Output: "Walking"

Explanation:
Mixins allow you to share functionality across classes without classical inheritance by copying methods into a prototype.
