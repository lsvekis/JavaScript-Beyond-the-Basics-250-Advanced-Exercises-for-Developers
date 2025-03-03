
const delayedPromise = new Promise((resolve, reject) => {
setTimeout(() => {
resolve('Promise Resolved');
}, 1000);
});

delayedPromise.then(message => console.log(message)); // Output after 1 second: "Promise Resolved"

Explanation:
This example demonstrates creating a Promise that resolves after a 1-second delay. The .then method processes the resolved value.
