
function safeRecursive(fn) {
let callCount = 0;
return function recursive(...args) {
callCount++;
if (callCount > 1000) {
throw new Error('Maximum recursion reached');
}
return fn(recursive, ...args);
};
}

const factorial = safeRecursive((self, n) => {
return n <= 1 ? 1 : n * self(n - 1);
});

console.log(factorial(5)); // Output: 120

Explanation:
The closure variable callCount tracks how many times the recursive function is called, helping prevent potential stack overflow by limiting recursion.
