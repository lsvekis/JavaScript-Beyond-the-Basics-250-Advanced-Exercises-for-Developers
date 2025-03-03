
const fruits = ['apple', 'banana', 'cherry', 'date'];
const [firstFruit, secondFruit, ...otherFruits] = fruits;
console.log(firstFruit);   // Output: "apple"
console.log(otherFruits);  // Output: ["cherry", "date"]

Explanation:
The rest operator (...otherFruits) gathers all remaining items into a new array after destructuring.
