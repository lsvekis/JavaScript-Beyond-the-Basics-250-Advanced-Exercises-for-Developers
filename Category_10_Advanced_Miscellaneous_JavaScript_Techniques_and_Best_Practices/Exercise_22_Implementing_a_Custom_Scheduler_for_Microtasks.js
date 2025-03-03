
function scheduleMicrotask(fn) {
Promise.resolve().then(fn);
}
console.log('Before microtask');
scheduleMicrotask(() => console.log('Microtask executed'));
console.log('After microtask');

Explanation:
Scheduling with microtasks allows you to run code asynchronously but before the next macrotask, ensuring timely execution.
