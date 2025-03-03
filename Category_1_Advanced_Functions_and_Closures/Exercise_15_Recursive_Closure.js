
function createRecursiveCounter() {
let count = 0;
function increment() {
count++;
if (count < 5) {
return increment();
}
return count;
}
return increment;
}

console.log(createRecursiveCounter()()); // Output: 5

Explanation:
The inner function increment accesses and modifies count recursively until a condition is met. The closure preserves the value of count across recursive calls.
