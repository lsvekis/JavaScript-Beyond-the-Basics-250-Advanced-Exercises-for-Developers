
function createGreeter(greeting) {
return function(name) {
console.log(`${greeting}, ${name}!`);
};
}

const greetHello = createGreeter('Hello');
greetHello('World'); // Output: "Hello, World!"

Explanation:
The createGreeter function “remembers” the greeting passed to it and uses that value each time the returned function is invoked.
