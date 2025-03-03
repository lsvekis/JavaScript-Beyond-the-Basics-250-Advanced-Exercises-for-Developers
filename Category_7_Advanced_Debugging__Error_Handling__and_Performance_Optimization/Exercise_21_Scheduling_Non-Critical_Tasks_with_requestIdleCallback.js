
if ('requestIdleCallback' in window) {
requestIdleCallback(() => {
console.log('Performing background task during idle time.');
});
} else {
// Fallback for browsers that do not support requestIdleCallback
setTimeout(() => {
console.log('Performing background task (fallback).');
}, 1000);
}

Explanation:
requestIdleCallback allows you to schedule tasks that run when the browser is not busy, improving the responsiveness of critical UI operations.
