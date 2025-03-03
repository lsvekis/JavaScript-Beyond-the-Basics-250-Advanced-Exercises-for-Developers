
function createImmutableObject(initialData) {
const data = { ...initialData };
return {
get: function(key) {
return data[key];
},
set: function(key, value) {
return createImmutableObject({ ...data, [key]: value });
},
getAll: function() {
return { ...data };
}
};
}

const obj1 = createImmutableObject({ a: 1 });
const obj2 = obj1.set('b', 2);
console.log(obj1.getAll()); // Output: { a: 1 }
console.log(obj2.getAll()); // Output: { a: 1, b: 2 }

Explanation:
Using closures to encapsulate the internal data, every “set” operation creates and returns a new immutable object, ensuring the original object remains unchanged.

This concludes the first category with 25 advanced exercises on functions and closures. Each exercise builds upon the last to deepen your understanding of how closures empower many advanced JavaScript techniques. Feel free to experiment with and modify these examples to further solidify your grasp of these concepts.
In this category, we explore a wide range of asynchronous programming techniques in vanilla JavaScript—from callbacks and Promises to async/await, async generators, cancellation, and concurrency control. Each exercise builds on previous concepts and deepens your understanding of how to manage asynchronous flows, handle errors, and optimize performance in real‑world applications.
