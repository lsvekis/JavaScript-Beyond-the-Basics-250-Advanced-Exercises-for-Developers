
const uniqueKey = Symbol('unique');
const obj = {
[uniqueKey]: 'Secret data'
};
console.log(obj[uniqueKey]); // Output: "Secret data"

Explanation:
Symbols guarantee that property keys won’t conflict with other keys, making them ideal for private or meta properties.
