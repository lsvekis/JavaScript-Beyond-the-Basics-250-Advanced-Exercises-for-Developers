
function promisify(fn) {
return function(...args) {
return new Promise((resolve, reject) => {
fn(...args, (err, data) => {
if (err) reject(err);
else resolve(data);
});
});
};
}

// Callback-based function
function asyncOperation(callback) {
setTimeout(() => {
callback(null, 'Promisified Success');
}, 1000);
}

const asyncOperationPromise = promisify(asyncOperation);
asyncOperationPromise().then(console.log); // Output: "Promisified Success" after 1 second

Explanation:
The promisify function wraps a callback-style function, returning a new function that produces a Promise, making it easier to integrate with modern asynchronous patterns.
