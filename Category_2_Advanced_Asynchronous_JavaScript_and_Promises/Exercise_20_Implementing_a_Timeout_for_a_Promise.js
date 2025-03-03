
function promiseWithTimeout(promise, timeoutMs) {
const timeout = new Promise((_, reject) => {
setTimeout(() => reject('Operation timed out'), timeoutMs);
});
return Promise.race([promise, timeout]);
}

const slowPromise = new Promise(resolve => setTimeout(() => resolve('Slow data'), 2000));

promiseWithTimeout(slowPromise, 1000)
.then(data => console.log(data))
.catch(error => console.error(error)); // Output: "Operation timed out"

Explanation:
By racing the original promise against a timeout promise, this pattern rejects if the operation takes too long.
