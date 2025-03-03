
class Singleton {
constructor(value) {
if (Singleton.instance) {
return Singleton.instance;
}
this.value = value;
Singleton.instance = this;
}
}

const instance1 = new Singleton('First');
const instance2 = new Singleton('Second');
console.log(instance1.value); // Output: "First"
console.log(instance2.value); // Output: "First"
console.log(instance1 === instance2); // Output: true

Explanation:
The constructor checks if an instance already exists; if so, it returns that instance. This ensures that only one instance is created.
