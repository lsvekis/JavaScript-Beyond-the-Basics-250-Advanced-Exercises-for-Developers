
function* numberGenerator() {
yield 1;
yield 2;
yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3

Explanation:
Generator functions (using the function* syntax) yield values one at a time, pausing execution between each yield.
