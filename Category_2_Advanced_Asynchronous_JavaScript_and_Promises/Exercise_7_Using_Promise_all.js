
const promise1 = new Promise(resolve => setTimeout(() => resolve('Result 1'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Result 2'), 1500));
const promise3 = new Promise(resolve => setTimeout(() => resolve('Result 3'), 500));

Promise.all([promise1, promise2, promise3])
.then(results => {
console.log(results); // Output: ["Result 1", "Result 2", "Result 3"]
});

Explanation:
Promise.all waits until all promises resolve and then returns an array of results in the order of the input promises.
