
function onceDelay(fn, delay) {
let executed = false;
return function(...args) {
if (!executed) {
executed = true;
setTimeout(() => {
fn.apply(this, args);
}, delay);
}
};
}

const delayedLog = onceDelay(() => console.log('Executed!'), 1000);
delayedLog(); // Logs "Executed!" after 1 second
delayedLog(); // Ignored

Explanation:
A flag (executed) stored in the closure prevents the function from running more than once, even if called multiple times.
