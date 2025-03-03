
function partial(fn, ...fixedArgs) {
return function(...remainingArgs) {
return fn(...fixedArgs, ...remainingArgs);
};
}

function multiply(a, b, c) {
return a * b * c;
}

const partialMultiply = partial(multiply, 2);
console.log(partialMultiply(3, 4)); // Output: 24 (2 * 3 * 4)

Explanation:
The partial function pre-fills some arguments (in this case, the number 2) and returns a new function that takes the rest of the arguments when called.
