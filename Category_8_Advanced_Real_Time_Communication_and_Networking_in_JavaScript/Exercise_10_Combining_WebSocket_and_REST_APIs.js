
// Initial data load using REST
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => console.log('Initial data:', data));

// Real-time updates using WebSocket
const wsRealTime = new WebSocket('wss://echo.websocket.events');
wsRealTime.onopen = () => wsRealTime.send('Real-time update request');
wsRealTime.onmessage = (e) => console.log('Real-time update:', e.data);

Explanation:
This approach leverages REST to load the initial dataset and then switches to WebSocket for receiving ongoing updates.
