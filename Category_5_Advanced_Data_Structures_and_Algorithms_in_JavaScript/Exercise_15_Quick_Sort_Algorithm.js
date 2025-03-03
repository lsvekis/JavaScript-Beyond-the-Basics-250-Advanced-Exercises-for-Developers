
function quickSort(arr) {
if (arr.length <= 1) return arr;
const pivot = arr[arr.length - 1];
const left = [];
const right = [];
for (let i = 0; i < arr.length - 1; i++) {
arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
}
return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([7, 2, 1, 6, 8, 5, 3, 4]));
// Output: [1,2,3,4,5,6,7,8]

Explanation:
Quick sort selects a pivot and partitions the array into elements less than and greater than the pivot, then recursively sorts each partition.
