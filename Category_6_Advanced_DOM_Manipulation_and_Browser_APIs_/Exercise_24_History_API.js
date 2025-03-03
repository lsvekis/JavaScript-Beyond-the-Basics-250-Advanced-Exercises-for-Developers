
// Add a new state
history.pushState({ page: 1 }, 'Title 1', '?page=1');

// Replace the current state
history.replaceState({ page: 2 }, 'Title 2', '?page=2');

// Listen for popstate events
window.addEventListener('popstate', (event) => {
console.log('Location changed:', document.location, event.state);
});

Explanation:
The History API allows you to programmatically modify the browser history and respond to changes without full page reloads.
