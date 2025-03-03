
const evtSource = new EventSource('https://stream.meetup.com/2/rsvps');

evtSource.onmessage = (e) => {
console.log('New event:', e.data);
};

evtSource.onerror = (e) => {
console.error('SSE error:', e);
};

Explanation:
Using EventSource, the client subscribes to server‑sent events. Each message is logged as it arrives.
