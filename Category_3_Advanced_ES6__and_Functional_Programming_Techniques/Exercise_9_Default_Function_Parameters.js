
function greet(name = 'Guest') {
console.log(`Hello, ${name}!`);
}

greet();         // Output: "Hello, Guest!"
greet('Dana');   // Output: "Hello, Dana!"

Explanation:
Default parameters assign a default value if no argument is provided, ensuring functions have a fallback value.
