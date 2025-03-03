
let obj1 = { name: 'obj1' };
const weakMap = new WeakMap();
weakMap.set(obj1, 'data');

let obj2 = { name: 'obj2' };
const weakSet = new WeakSet();
weakSet.add(obj2);

console.log(weakMap.get(obj1)); // Output: "data"
console.log(weakSet.has(obj2)); // Output: true

// When obj1 and obj2 go out of scope, they can be garbage collected.

Explanation:
WeakMap and WeakSet allow objects to be garbage collected when there are no other references, preventing memory leaks.
