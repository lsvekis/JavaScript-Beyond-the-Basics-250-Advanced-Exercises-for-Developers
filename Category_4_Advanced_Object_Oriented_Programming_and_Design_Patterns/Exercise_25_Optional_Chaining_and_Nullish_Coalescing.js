
const user = {
name: 'Frank',
preferences: {
theme: null
}
};

const theme = user.preferences?.theme ?? 'light';
console.log(theme); // Output: "light"

Explanation:
Optional chaining (?.) stops evaluation if a property is undefined or null, and the nullish coalescing operator (??) provides a default value when the left-hand side is null or undefined.

This concludes the third category with 25 advanced exercises covering modern ES6+ features and functional programming techniques. Each exercise is designed to illustrate the power and elegance of modern JavaScript, enabling you to write concise, expressive, and robust code.
In this category, you’ll explore how to leverage advanced OOP techniques in JavaScript to solve common design challenges. Through 25 exercises, you’ll implement proven design patterns—such as Singleton, Factory, Observer, and more—using vanilla JavaScript classes, prototypes, and related tools. These exercises are arranged from introductory to more complex patterns, helping you build robust, modular, and scalable applications.
