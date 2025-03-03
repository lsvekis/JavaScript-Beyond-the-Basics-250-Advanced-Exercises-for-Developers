
class Calculator {
constructor(value = 0) {
this.value = value;
}
add(n) {
this.value += n;
return this;
}
subtract(n) {
this.value -= n;
return this;
}
getResult() {
return this.value;
}
}
const result = new Calculator(10).add(5).subtract(3).getResult();
console.log('Result:', result); // Output: 12

Explanation:
A fluent interface improves readability by chaining method calls.
