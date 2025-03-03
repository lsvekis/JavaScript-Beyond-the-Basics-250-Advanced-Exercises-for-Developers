
class Reflective {
constructor() {
this.metadata = {};
}
setMetadata(key, value) {
this.metadata[key] = value;
}
getMetadata(key) {
return this.metadata[key];
}
listProperties() {
return Reflect.ownKeys(this);
}
}

const obj = new Reflective();
obj.setMetadata('role', 'admin');
console.log(obj.getMetadata('role')); // Output: "admin"
console.log(obj.listProperties());    // Output: Array of properties (including metadata)

Explanation:
This pattern uses the Reflect API to inspect and manage object properties dynamically, enabling more flexible and self‑descriptive code.

This concludes Category 4: Advanced Object‑Oriented Programming and Design Patterns with 25 exercises. Each exercise demonstrates a distinct design pattern or OOP concept, empowering you to write code that is both modular and scalable.
In this category, we explore how to implement and utilize classic data structures and algorithmic techniques using vanilla JavaScript. These exercises cover linked lists, trees, graphs, sorting/searching algorithms, dynamic programming, backtracking, and more. Each exercise comes with complete code examples and detailed explanations to help you understand the inner workings of these implementations and how they can be applied to solve real‑world problems.
