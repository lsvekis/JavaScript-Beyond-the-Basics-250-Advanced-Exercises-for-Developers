
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5]

Explanation:
The spread operator (...) expands arrays into individual elements, making it easy to concatenate arrays or create shallow copies.
