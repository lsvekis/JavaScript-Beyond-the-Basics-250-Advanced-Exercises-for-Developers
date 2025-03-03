
function memoize(fn) {
const cache = {};
return function(...args) {
const key = JSON.stringify(args);
if (cache[key]) {
return cache[key];
}
const result = fn(...args);
cache[key] = result;
return result;
};
}

// Example: Fibonacci with memoization
const fib = memoize(function(n) {
if (n < 2) return n;
return fib(n - 1) + fib(n - 2);
});

console.log(fib(10)); // Output: 55

Explanation:
The memoize function stores computed results in a cache (a variable captured by the returned function). When the function is called again with the same arguments, it returns the cached value instead of recalculating.
