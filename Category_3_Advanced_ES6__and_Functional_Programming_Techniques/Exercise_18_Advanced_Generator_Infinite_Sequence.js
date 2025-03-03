
function* infiniteNumbers() {
let num = 1;
while (true) {
yield num++;
}
}

const numbersGen = infiniteNumbers();
console.log(numbersGen.next().value); // Output: 1
console.log(numbersGen.next().value); // Output: 2
// Caution: Do not iterate infinitely in production code.

Explanation:
This generator uses an infinite loop to continuously yield numbers. Consumers can call next() as many times as needed without exhausting a predefined sequence.
