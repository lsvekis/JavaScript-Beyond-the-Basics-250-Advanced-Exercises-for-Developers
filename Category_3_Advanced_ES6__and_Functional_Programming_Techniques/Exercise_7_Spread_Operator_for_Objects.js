
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 2, c: 3, d: 4 }

Explanation:
Similar to arrays, the spread operator can expand an object’s properties into a new object, allowing for easy merging and cloning.
