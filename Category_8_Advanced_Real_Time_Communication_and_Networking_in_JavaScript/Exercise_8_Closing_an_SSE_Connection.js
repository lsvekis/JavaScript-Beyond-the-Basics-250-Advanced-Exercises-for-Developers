
const evtSource = new EventSource('https://stream.meetup.com/2/rsvps');
setTimeout(() => {
evtSource.close();
console.log('SSE connection closed.');
}, 10000);

Explanation:
This code automatically closes the SSE connection after 10 seconds to release resources when updates are no longer required.
