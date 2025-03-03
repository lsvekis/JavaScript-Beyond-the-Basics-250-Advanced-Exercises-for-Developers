
const canvasAnim = document.getElementById('animCanvas');
const ctxAnim = canvasAnim.getContext('2d');
let x = 0;

function animate() {
ctxAnim.clearRect(0, 0, canvasAnim.width, canvasAnim.height);
ctxAnim.fillStyle = '#0000FF';
ctxAnim.fillRect(x, 50, 50, 50);
x = (x + 2) % canvasAnim.width;
requestAnimationFrame(animate);
}

animate();

Explanation:
Using requestAnimationFrame, this code continuously updates the canvas to move a blue square across the screen.
