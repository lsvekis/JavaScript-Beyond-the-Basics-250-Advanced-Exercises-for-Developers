
function debounce(fn, delay) {
let timer;
return function(...args) {
clearTimeout(timer);
timer = setTimeout(() => {
fn.apply(this, args);
}, delay);
};
}

// Example usage:
window.addEventListener('resize', debounce(() => {
console.log('Resized!');
}, 500));

Explanation:
The debounce function uses a closure to store a timer. Every time the debounced function is called, it resets the timer—ensuring the function only executes after the event has “settled.”
