
class HashTable {
constructor(size = 53) {
this.keyMap = new Array(size);
}
_hash(key) {
let total = 0;
for (let char of key) {
total = (total * 31 + char.charCodeAt(0)) % this.keyMap.length;
}
return total;
}
set(key, value) {
const index = this._hash(key);
if (!this.keyMap[index]) this.keyMap[index] = [];
this.keyMap[index].push([key, value]);
}
get(key) {
const index = this._hash(key);
if (this.keyMap[index]) {
for (let [k, v] of this.keyMap[index]) {
if (k === key) return v;
}
}
return undefined;
}
}

const ht = new HashTable();
ht.set('color', 'blue');
console.log(ht.get('color')); // Output: "blue"

Explanation:
A hash table maps keys to values using a hash function. Collisions are handled with separate chaining (storing pairs in an array).
