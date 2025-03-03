
const box = document.getElementById('animateBox');
box.animate([
{ transform: 'translateX(0px)', background: 'red' },
{ transform: 'translateX(300px)', background: 'blue' }
], {
duration: 2000,
iterations: Infinity,
direction: 'alternate'
});

Explanation:
The Web Animations API provides a performant, declarative way to animate elements. Here, a box moves horizontally while changing color, looping infinitely.

This concludes Category 6: Advanced DOM Manipulation and Browser APIs with 25 exercises. Each example equips you with practical skills for building interactive, responsive, and high-performance web applications using vanilla JavaScript.
In this category, you'll explore techniques to improve the quality and performance of your JavaScript code. These exercises cover advanced console methods, custom assertions and test runners, error handling patterns, performance measurement, and optimization strategies. Each exercise includes complete code examples and detailed explanations—all using vanilla JavaScript.
