
class Rectangle {
constructor(width, height) {
this.width = width;
this.height = height;
}
get area() {
return this.width * this.height;
}
set area(newArea) {
this.width = Math.sqrt(newArea);
this.height = Math.sqrt(newArea);
}
}

const rect = new Rectangle(4, 9);
console.log(rect.area); // Output: 36
rect.area = 16;
console.log(rect.width, rect.height); // Output: 4 4

Explanation:
Getters allow properties to be computed on the fly, and setters provide a controlled way to update multiple properties.
