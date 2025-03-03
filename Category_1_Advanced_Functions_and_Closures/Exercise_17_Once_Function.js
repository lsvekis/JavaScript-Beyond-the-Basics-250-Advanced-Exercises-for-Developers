
function once(fn) {
let called = false;
return function(...args) {
if (!called) {
called = true;
return fn.apply(this, args);
}
};
}

const initialize = once(() => console.log('Initialized!'));
initialize(); // Output: "Initialized!"
initialize(); // No output

Explanation:
Using a closure to hold the called flag, the function ensures that the wrapped function executes only on the first call.
