
function mergeSort(arr) {
if (arr.length <= 1) return arr;
const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid));
const right = mergeSort(arr.slice(mid));
return merge(left, right);
}

function merge(left, right) {
const sorted = [];
while (left.length && right.length) {
sorted.push(left[0] < right[0] ? left.shift() : right.shift());
}
return sorted.concat(left, right);
}

console.log(mergeSort([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]

Explanation:
Merge sort divides the array into halves, recursively sorts them, and then merges the sorted halves, achieving efficient performance.
