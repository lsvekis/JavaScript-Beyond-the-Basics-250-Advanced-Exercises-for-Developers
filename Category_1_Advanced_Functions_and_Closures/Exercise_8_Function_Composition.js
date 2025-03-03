
function compose(f, g) {
return function(x) {
return f(g(x));
};
}

function double(n) {
return n * 2;
}

function square(n) {
return n * n;
}

const composed = compose(square, double);
console.log(composed(3)); // Output: 36 (square(double(3)) => square(6))

Explanation:
Function composition creates a new function where g is applied first to the argument, and then f is applied to the result.
