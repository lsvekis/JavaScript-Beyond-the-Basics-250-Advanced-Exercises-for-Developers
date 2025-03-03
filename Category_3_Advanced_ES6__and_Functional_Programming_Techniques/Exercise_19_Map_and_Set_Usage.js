
const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map.get('a')); // Output: 1

const set = new Set([1, 2, 2, 3]);
console.log([...set]); // Output: [1, 2, 3]

Explanation:
Map provides key-value storage with any type of key, and Set stores unique values, automatically removing duplicates.
