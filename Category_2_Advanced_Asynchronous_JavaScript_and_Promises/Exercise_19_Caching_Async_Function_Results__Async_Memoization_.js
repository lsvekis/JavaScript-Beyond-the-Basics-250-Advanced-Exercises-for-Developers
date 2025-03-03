
function asyncMemoize(fn) {
const cache = new Map();
return async function(...args) {
const key = JSON.stringify(args);
if (cache.has(key)) {
return cache.get(key);
}
const result = await fn(...args);
cache.set(key, result);
return result;
};
}

async function fetchData(id) {
console.log(`Fetching data for ${id}`);
return new Promise(resolve => setTimeout(() => resolve(`Data ${id}`), 500));
}

const memoizedFetch = asyncMemoize(fetchData);
memoizedFetch(1).then(console.log); // Fetches and caches data
memoizedFetch(1).then(console.log); // Returns cached data immediately

Explanation:
By caching the results of an async operation, subsequent calls with the same arguments return the cached value, optimizing performance.
