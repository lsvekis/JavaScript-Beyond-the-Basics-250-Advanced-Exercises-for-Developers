
function logDecorator(fn) {
return function(...args) {
console.log(`Calling ${fn.name} with arguments:`, args);
const result = fn.apply(this, args);
console.log(`Result:`, result);
return result;
};
}

function multiply(a, b) {
return a * b;
}

const loggedMultiply = logDecorator(multiply);
loggedMultiply(3, 4); // Logs function call details and result

Explanation:
This higher-order function wraps any given function, logs its parameters and result, and then returns the result. The closure holds a reference to the original function.
