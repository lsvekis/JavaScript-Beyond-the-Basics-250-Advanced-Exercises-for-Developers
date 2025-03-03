
class CustomIterator {
constructor(data) {
this.data = data;
this.index = 0;
}
next() {
if (this.index < this.data.length) {
return { value: this.data[this.index++], done: false };
}
return { done: true };
}
}

const iterator = new CustomIterator([1, 2, 3]);
console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }
console.log(iterator.next()); // Output: { value: 3, done: false }
console.log(iterator.next()); // Output: { done: true }

Explanation:
The iterator encapsulates traversal logic, providing a standard way to access elements sequentially.
