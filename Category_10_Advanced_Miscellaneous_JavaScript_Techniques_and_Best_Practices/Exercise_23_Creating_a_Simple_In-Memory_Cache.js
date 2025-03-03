
class Cache {
constructor() {
this.store = new Map();
}
set(key, value, ttl = 5000) {
this.store.set(key, value);
setTimeout(() => this.store.delete(key), ttl);
}
get(key) {
return this.store.get(key);
}
}
const cache = new Cache();
cache.set('greeting', 'Hello, Cache!', 3000);
console.log('Cache:', cache.get('greeting'));

Explanation:
A simple cache stores values and automatically expires them after a set time-to-live.
