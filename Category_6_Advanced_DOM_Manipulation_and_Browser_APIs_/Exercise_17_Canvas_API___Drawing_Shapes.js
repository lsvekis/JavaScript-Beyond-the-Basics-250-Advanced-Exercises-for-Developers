
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw rectangle
ctx.fillStyle = '#FF0000';
ctx.fillRect(10, 10, 100, 50);

// Draw circle
ctx.beginPath();
ctx.arc(200, 75, 50, 0, Math.PI * 2);
ctx.fillStyle = '#00FF00';
ctx.fill();

Explanation:
The Canvas API provides a drawing surface. Here, a red rectangle and a green circle are rendered onto the canvas.
