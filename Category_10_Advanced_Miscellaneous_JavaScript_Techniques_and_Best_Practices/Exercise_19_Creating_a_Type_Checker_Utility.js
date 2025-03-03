
function checkType(value, type) {
if (typeof value !== type) {
throw new Error(`Expected ${type}, got ${typeof value}`);
}
}
function addNumbers(a, b) {
checkType(a, 'number');
checkType(b, 'number');
return a + b;
}
console.log('Sum:', addNumbers(3, 4));

Explanation:
Runtime type checking helps catch errors early by ensuring function arguments are of expected types.
