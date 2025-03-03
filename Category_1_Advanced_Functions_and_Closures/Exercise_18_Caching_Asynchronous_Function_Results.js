
function asyncMemoize(fn) {
const cache = {};
return async function(...args) {
const key = JSON.stringify(args);
if (cache[key]) {
return cache[key];
}
const result = await fn(...args);
cache[key] = result;
return result;
};
}

async function fetchData(id) {
// Simulate an API call
return new Promise(resolve => {
setTimeout(() => resolve(`Data for ${id}`), 500);
});
}

const memoizedFetch = asyncMemoize(fetchData);
memoizedFetch(1).then(console.log); // Fetches data
memoizedFetch(1).then(console.log); // Returns cached data

Explanation:
Similar to synchronous memoization, this version caches the promise result. The closure holds the cache object for subsequent asynchronous calls.
