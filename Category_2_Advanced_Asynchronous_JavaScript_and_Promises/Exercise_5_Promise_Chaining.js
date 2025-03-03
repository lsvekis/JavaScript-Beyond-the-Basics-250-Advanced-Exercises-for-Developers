
const chain = new Promise((resolve, reject) => {
setTimeout(() => resolve(1), 500);
});

chain
.then(value => {
console.log(value); // Output: 1
return value + 1;
})
.then(value => {
console.log(value); // Output: 2
return value * 3;
})
.then(value => {
console.log(value); // Output: 6
});

Explanation:
Each .then receives the output from the previous promise, creating a chain of asynchronous operations that execute in order.
