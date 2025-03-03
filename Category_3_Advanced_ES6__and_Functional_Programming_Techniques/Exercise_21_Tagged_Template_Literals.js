
function highlight(strings, ...values) {
return strings.reduce((acc, str, i) => acc + str + (values[i] ? `<strong>${values[i]}</strong>` : ''), '');
}

const name = 'Eve';
const message = highlight`Hello, ${name}! Welcome to the tagged templates demo.`;
console.log(message);
// Output: "Hello, <strong>Eve</strong>! Welcome to the tagged templates demo."

Explanation:
Tagged templates allow you to intercept and process template literals using a custom function before final string interpolation.
