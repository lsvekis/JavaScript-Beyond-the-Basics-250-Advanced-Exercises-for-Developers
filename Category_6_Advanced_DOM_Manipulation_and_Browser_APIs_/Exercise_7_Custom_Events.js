
const customEvent = new CustomEvent('myCustomEvent', {
detail: { message: 'Custom event triggered!' }
});

document.addEventListener('myCustomEvent', (e) => {
console.log(e.detail.message);
});

document.dispatchEvent(customEvent);

Explanation:
Custom events allow you to define your own event types and pass additional data via the detail property.
