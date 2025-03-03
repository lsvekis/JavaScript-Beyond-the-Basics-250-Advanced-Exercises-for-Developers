
class MathUtil {
static add(a, b) {
return a + b;
}
}

console.log(MathUtil.add(5, 7)); // Output: 12

Explanation:
Static methods are called on the class itself, not on an instance, making them useful for utility functions.
