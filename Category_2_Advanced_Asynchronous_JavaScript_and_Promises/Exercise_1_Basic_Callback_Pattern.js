
function asyncOperation(callback) {
setTimeout(() => {
callback('Operation completed');
}, 1000);
}

asyncOperation((message) => {
console.log(message); // Output after 1 second: "Operation completed"
});

Explanation:
Here, asyncOperation accepts a callback that is invoked after a 1-second delay via setTimeout, demonstrating the basic pattern of asynchronous callbacks.
