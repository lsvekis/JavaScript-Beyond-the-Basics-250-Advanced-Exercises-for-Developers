
const iterable = {
data: [10, 20, 30],
[Symbol.iterator]() {
let index = 0;
const data = this.data;
return {
next() {
return index < data.length
? { value: data[index++], done: false }
: { done: true };
}
};
}
};

for (const num of iterable) {
console.log(num); // Output: 10, then 20, then 30
}

Explanation:
By implementing the [Symbol.iterator] method, an object becomes iterable, allowing it to be used in loops and with the spread operator.
