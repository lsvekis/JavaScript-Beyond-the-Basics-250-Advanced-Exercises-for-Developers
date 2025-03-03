Objective:
Write a simple Node.js script to concatenate multiple JavaScript files.
Code (build.js):

const fs = require('fs');
const files = ['./math.js', './greet.js'];
let bundle = '';
files.forEach(file => {
bundle += fs.readFileSync(file, 'utf-8') + '\n';
});
fs.writeFileSync('./bundle.js', bundle);
console.log('Bundle created.');

Explanation:
This Node.js script simulates a basic build process by concatenating module files into a single bundle.

This final category covers a diverse set of advanced topics—from memory management and lazy evaluation to custom iterables and mini-frameworks. These exercises highlight best practices and creative techniques that help you write clean, efficient, and maintainable code.
