
const range = {
start: 1,
end: 5,
[Symbol.iterator]() {
let current = this.start;
const end = this.end;
return {
next() {
return current <= end ? { value: current++, done: false } : { done: true };
}
};
}
};
for (const num of range) {
console.log(num); // Outputs numbers 1 to 5
}

Explanation:
Implementing the [Symbol.iterator] method makes an object iterable, enabling use in loops and spread syntax.
