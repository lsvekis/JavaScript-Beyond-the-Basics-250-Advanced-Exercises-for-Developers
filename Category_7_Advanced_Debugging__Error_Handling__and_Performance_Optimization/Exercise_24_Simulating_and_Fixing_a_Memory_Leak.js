
// Simulated memory leak:
const cache = new Map();
function addToCache(key, value) {
cache.set(key, value);
}
let obj = { data: 'Important Data' };
addToCache(obj, 'Cached Value');
// obj remains in memory due to Map reference

// Fix using WeakMap:
const safeCache = new WeakMap();
function addToSafeCache(key, value) {
safeCache.set(key, value);
}
let anotherObj = { data: 'Ephemeral Data' };
addToSafeCache(anotherObj, 'Safe Cached Value');
// When anotherObj is no longer referenced, it can be garbage collected

Explanation:
Using a regular Map can prevent objects from being garbage collected if they’re used as keys. WeakMap holds weak references, allowing for proper memory management.
