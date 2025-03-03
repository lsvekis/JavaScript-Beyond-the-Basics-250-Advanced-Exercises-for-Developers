
const counter = {
count: 0,
increment() {
setInterval(() => {
this.count++;
console.log(this.count);
}, 500);
}
};

counter.increment();
// The arrow function ensures that "this" refers to the counter object.

Explanation:
Arrow functions do not have their own this binding. Instead, they use the surrounding scope’s this, which is especially useful in callbacks.
