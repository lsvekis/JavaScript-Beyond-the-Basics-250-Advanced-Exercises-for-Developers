
function maxSubArray(arr, left = 0, right = arr.length - 1) {
if (left === right) return arr[left];
const mid = Math.floor((left + right) / 2);
const leftMax = maxSubArray(arr, left, mid);
const rightMax = maxSubArray(arr, mid + 1, right);

let leftSum = -Infinity, sum = 0;
for (let i = mid; i >= left; i--) {
sum += arr[i];
leftSum = Math.max(leftSum, sum);
}

let rightSum = -Infinity;
sum = 0;
for (let i = mid + 1; i <= right; i++) {
sum += arr[i];
rightSum = Math.max(rightSum, sum);
}

return Math.max(leftMax, rightMax, leftSum + rightSum);
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6

Explanation:
This algorithm divides the array into halves, computes the maximum subarray sum in each half, and then finds the maximum sum that crosses the midpoint.

This concludes Category 5: Advanced Data Structures and Algorithms in JavaScript with 25 exercises. Each exercise provides a practical implementation and explanation of key data structures and algorithmic techniques using vanilla JavaScript. Experiment with these examples and modify them to deepen your understanding of algorithm design and optimization in JavaScript.
In this category, you'll explore how to interact with the web page using vanilla JavaScript—selecting and manipulating DOM elements, handling events, and leveraging various browser APIs. Each exercise demonstrates a specific technique, from basic element selection and dynamic content updates to advanced topics such as Web Workers, Service Workers, and the Canvas API. Enjoy building richer, more interactive web experiences!
