
function Person(name) {
let _name = name; // Private variable
this.getName = function() {
return _name;
};
this.setName = function(newName) {
_name = newName;
};
}

const person = new Person('Bob');
console.log(person.getName()); // Output: "Bob"
person.setName('Alice');
console.log(person.getName()); // Output: "Alice"

Explanation:
Here, _name is not accessible from outside the constructor. Only the privileged methods getName and setName (which close over _name) can access it.
