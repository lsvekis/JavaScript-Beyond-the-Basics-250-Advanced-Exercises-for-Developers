
function memoize(fn) {
const cache = new Map();
return (...args) => {
const key = JSON.stringify(args);
if (cache.has(key)) return cache.get(key);
const result = fn(...args);
cache.set(key, result);
return result;
};
}
const slowFactorial = memoize(function factorial(n) {
return n <= 1 ? 1 : n * factorial(n - 1);
});
console.log('Factorial of 5:', slowFactorial(5));

Explanation:
Memoization stores function results to avoid redundant calculations, boosting performance for expensive operations.
