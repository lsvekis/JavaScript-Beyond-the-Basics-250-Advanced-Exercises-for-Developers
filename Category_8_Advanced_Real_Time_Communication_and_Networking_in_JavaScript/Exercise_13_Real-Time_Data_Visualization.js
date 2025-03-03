<!-- index.html -->
<canvas id="chartCanvas" width="400" height="200"></canvas>
<script>
const ctx = document.getElementById('chartCanvas').getContext('2d');
// For simplicity, we simulate chart update by drawing rectangles.
const wsChart = new WebSocket('wss://echo.websocket.events');
wsChart.onopen = () => wsChart.send('50'); // Simulated data point
wsChart.onmessage = (e) => {
const value = Number(e.data);
ctx.clearRect(0, 0, 400, 200);
ctx.fillStyle = 'green';
ctx.fillRect(50, 200 - value * 2, 50, value * 2);
console.log('Chart updated with value:', value);
};
</script>

Explanation:
This demo uses WebSocket to receive a numeric value and updates a simple canvas “chart” accordingly.
