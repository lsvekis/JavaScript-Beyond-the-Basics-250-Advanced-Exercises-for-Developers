
function fib(n, memo = {}) {
if (n <= 1) return n;
if (memo[n]) return memo[n];
memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
return memo[n];
}

console.log(fib(10)); // Output: 55

Explanation:
Memoization caches previously computed Fibonacci numbers, drastically reducing the number of recursive calls.
