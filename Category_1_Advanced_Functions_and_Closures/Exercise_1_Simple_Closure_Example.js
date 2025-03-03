
function createCounter() {
let count = 0;
return function() {
count++;
return count;
};
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

Explanation:
Here, the inner function has access to the variable count even after createCounter has finished executing. This is a basic example of a closure, where the inner function “closes over” the variables of its outer function.
