
const prop = 'value';
const obj = {
prop,
method() {
return 'Enhanced method';
}
};

console.log(obj.prop);      // Output: "value"
console.log(obj.method());  // Output: "Enhanced method"

Explanation:
Enhanced object literals let you omit redundancy when property names match variable names and define methods in a shorter syntax.
