
function throttle(fn, limit) {
let inThrottle;
return function(...args) {
if (!inThrottle) {
fn.apply(this, args);
inThrottle = true;
setTimeout(() => inThrottle = false, limit);
}
};
}

// Example usage:
window.addEventListener('scroll', throttle(() => {
console.log('Scrolled!');
}, 1000));

Explanation:
The throttle function uses a closure to maintain an inThrottle flag. Once the function is called, further calls within the limit are ignored until the timer resets.
