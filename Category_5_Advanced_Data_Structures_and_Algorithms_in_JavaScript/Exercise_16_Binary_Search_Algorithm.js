
function binarySearch(arr, target) {
let low = 0, high = arr.length - 1;
while (low <= high) {
const mid = Math.floor((low + high) / 2);
if (arr[mid] === target) return mid;
else if (arr[mid] < target) low = mid + 1;
else high = mid - 1;
}
return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2

Explanation:
Binary search efficiently finds a target in a sorted array by repeatedly dividing the search interval in half.
