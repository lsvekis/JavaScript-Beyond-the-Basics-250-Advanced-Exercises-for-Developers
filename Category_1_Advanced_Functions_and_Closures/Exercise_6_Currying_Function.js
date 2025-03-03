
function curry(fn) {
return function curried(...args) {
if (args.length >= fn.length) {
return fn(...args);
} else {
return function(...moreArgs) {
return curried(...args, ...moreArgs);
};
}
};
}

function add(a, b, c) {
return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6

Explanation:
The curry function checks if the number of arguments passed is sufficient to call the original function. If not, it returns a new function that collects more arguments, enabling a chain of function calls.
