
const fast = new Promise(resolve => setTimeout(() => resolve('Fast'), 500));
const slow = new Promise(resolve => setTimeout(() => resolve('Slow'), 1500));

Promise.race([fast, slow])
.then(result => {
console.log(result); // Output: "Fast"
});

Explanation:
Promise.race returns the value of the promise that settles first—here, the faster promise wins the race.
