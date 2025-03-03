
new Promise((resolve, reject) => {
setTimeout(() => reject('Error occurred'), 500);
})
.then(result => {
console.log(result);
})
.catch(error => {
console.error('Caught:', error); // Output: "Caught: Error occurred"
});

Explanation:
If any promise in the chain rejects, the error is passed down to the .catch method, ensuring errors are handled gracefully.
