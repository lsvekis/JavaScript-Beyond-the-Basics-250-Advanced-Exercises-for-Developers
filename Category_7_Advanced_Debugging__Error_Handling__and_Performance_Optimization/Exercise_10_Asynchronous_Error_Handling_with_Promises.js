
Promise.resolve()
.then(() => {
throw new Error('Async error!');
})
.catch(error => {
console.error('Caught async error:', error.message);
});

Explanation:
Appending a .catch to a promise chain ensures that any errors are handled, preventing unhandled promise rejections.
