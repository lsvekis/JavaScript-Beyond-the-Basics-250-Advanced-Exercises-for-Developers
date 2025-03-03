
function greet() {
console.log('Hello for the first time!');
greet = function() {
console.log('Hello again!');
};
}

greet(); // Output: "Hello for the first time!"
greet(); // Output: "Hello again!"

Explanation:
On its first invocation, greet logs a unique message and then reassigns itself to a new function. The closure ensures the redefinition persists for future calls.
