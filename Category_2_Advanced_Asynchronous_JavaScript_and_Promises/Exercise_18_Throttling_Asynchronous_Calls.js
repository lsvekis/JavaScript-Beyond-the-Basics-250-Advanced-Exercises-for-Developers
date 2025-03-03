
function throttleAsync(fn, limit) {
let inThrottle = false;
return async function(...args) {
if (inThrottle) return;
inThrottle = true;
try {
return await fn(...args);
} finally {
setTimeout(() => { inThrottle = false; }, limit);
}
};
}

async function fetchData() {
console.log('Fetching...');
return 'Fetched Data';
}

const throttledFetch = throttleAsync(fetchData, 1000);

throttledFetch(); // Executes immediately
throttledFetch(); // Ignored if within 1 second

Explanation:
The throttle function uses a closure to enforce that the wrapped async function isn’t invoked more than once per specified interval.
