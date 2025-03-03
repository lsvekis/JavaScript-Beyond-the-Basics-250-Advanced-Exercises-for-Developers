
if (!Array.prototype.flat) {
Array.prototype.flat = function(depth = 1) {
return depth > 0
? this.reduce((acc, val) => acc.concat(Array.isArray(val) ? val.flat(depth - 1) : val), [])
: this.slice();
};
}

const nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // Output: [1, 2, 3, 4]

Explanation:
This polyfill adds support for Array.prototype.flat if it doesn't exist, ensuring consistent functionality across environments.
