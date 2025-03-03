
class LRUNode {
constructor(key, value) {
this.key = key;
this.value = value;
this.prev = null;
this.next = null;
}
}

class LRUCache {
constructor(capacity) {
this.capacity = capacity;
this.cache = new Map();
this.head = new LRUNode(null, null);
this.tail = new LRUNode(null, null);
this.head.next = this.tail;
this.tail.prev = this.head;
}
_remove(node) {
node.prev.next = node.next;
node.next.prev = node.prev;
}
_add(node) {
node.next = this.head.next;
node.prev = this.head;
this.head.next.prev = node;
this.head.next = node;
}
get(key) {
if (!this.cache.has(key)) return -1;
const node = this.cache.get(key);
this._remove(node);
this._add(node);
return node.value;
}
put(key, value) {
if (this.cache.has(key)) {
this._remove(this.cache.get(key));
}
const newNode = new LRUNode(key, value);
this._add(newNode);
this.cache.set(key, newNode);
if (this.cache.size > this.capacity) {
const lru = this.tail.prev;
this._remove(lru);
this.cache.delete(lru.key);
}
}
}

const lru = new LRUCache(2);
lru.put('a', 1);
lru.put('b', 2);
console.log(lru.get('a')); // Output: 1
lru.put('c', 3);
console.log(lru.get('b')); // Output: -1 (evicted)

Explanation:
An LRU cache evicts the least recently used item when capacity is exceeded. A doubly linked list maintains usage order while a hash table provides O(1) access.
