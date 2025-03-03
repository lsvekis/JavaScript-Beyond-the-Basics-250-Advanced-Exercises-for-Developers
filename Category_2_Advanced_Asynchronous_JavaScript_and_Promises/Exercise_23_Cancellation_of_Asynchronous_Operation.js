
function cancellablePromise(fn) {
let cancel;
const promise = new Promise((resolve, reject) => {
cancel = () => reject('Cancelled');
fn(resolve, reject);
});
promise.cancel = cancel;
return promise;
}

const asyncTask = cancellablePromise((resolve) => {
setTimeout(() => resolve('Task Completed'), 2000);
});

asyncTask.then(console.log).catch(console.error);
setTimeout(() => {
asyncTask.cancel(); // Cancels the promise before completion
}, 1000);

Explanation:
Here, a cancellation token (the cancel function) is attached to the Promise, allowing the caller to reject the Promise if needed.
