
console.log('Start');

setTimeout(() => {
console.log('Macrotask (setTimeout)');
}, 0);

Promise.resolve().then(() => {
console.log('Microtask (Promise)');
});

console.log('End');

Explanation:
Synchronous code executes first, followed by microtasks (Promise callbacks) before macrotasks (setTimeout). The output order is:
"Start"
"End"
"Microtask (Promise)"
"Macrotask (setTimeout)"

This concludes the second category with 25 advanced exercises covering asynchronous programming in JavaScript. Each exercise illustrates key patterns and best practices—from basic callbacks to advanced concurrency control—empowering you to write robust, efficient asynchronous code using vanilla JavaScript.
In this category, we dive into the modern features of JavaScript introduced in ES6 and beyond, along with functional programming concepts. You’ll explore destructuring, spread/rest operators, template literals, classes and inheritance, iterators/generators, Symbols, Proxies, and more. Each exercise is designed to build your understanding gradually from foundational ES6 features to advanced meta‑programming techniques—all using vanilla JavaScript.
