
class DrawingAPI {
drawCircle(x, y, radius) {
throw new Error('Method not implemented');
}
}

class DrawingAPI1 extends DrawingAPI {
drawCircle(x, y, radius) {
console.log(`API1.circle at ${x},${y} radius ${radius}`);
}
}

class DrawingAPI2 extends DrawingAPI {
drawCircle(x, y, radius) {
console.log(`API2.circle at ${x},${y} radius ${radius}`);
}
}

class Circle {
constructor(x, y, radius, drawingAPI) {
this.x = x;
this.y = y;
this.radius = radius;
this.drawingAPI = drawingAPI;
}
draw() {
this.drawingAPI.drawCircle(this.x, this.y, this.radius);
}
}

const circle1 = new Circle(1, 2, 3, new DrawingAPI1());
circle1.draw(); // Output: "API1.circle at 1,2 radius 3"

const circle2 = new Circle(4, 5, 6, new DrawingAPI2());
circle2.draw(); // Output: "API2.circle at 4,5 radius 6"

Explanation:
The Bridge pattern separates the abstraction (Circle) from its implementation (DrawingAPI), allowing both to vary independently.
