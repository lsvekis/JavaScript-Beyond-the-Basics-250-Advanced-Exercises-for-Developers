
const p1 = new Promise(resolve => setTimeout(() => resolve('Success'), 500));
const p2 = new Promise((resolve, reject) => setTimeout(() => reject('Error'), 1000));

Promise.allSettled([p1, p2])
.then(results => {
console.log(results);
// Output:
// [
//   { status: 'fulfilled', value: 'Success' },
//   { status: 'rejected', reason: 'Error' }
// ]
});

Explanation:
Promise.allSettled returns an array detailing the outcome (fulfilled or rejected) of each promise, useful for batch processing when failures are acceptable.
