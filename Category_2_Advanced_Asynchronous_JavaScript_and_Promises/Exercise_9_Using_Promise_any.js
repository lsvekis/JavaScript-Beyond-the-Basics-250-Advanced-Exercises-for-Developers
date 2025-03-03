
const promiseA = new Promise((resolve, reject) => setTimeout(() => reject('A failed'), 500));
const promiseB = new Promise((resolve, reject) => setTimeout(() => resolve('B success'), 1000));
const promiseC = new Promise((resolve, reject) => setTimeout(() => reject('C failed'), 1500));

Promise.any([promiseA, promiseB, promiseC])
.then(result => {
console.log(result); // Output: "B success"
})
.catch(error => {
console.error('All promises rejected', error);
});

Explanation:
Promise.any returns the first promise that fulfills. If all promises reject, it will throw an AggregateError.
