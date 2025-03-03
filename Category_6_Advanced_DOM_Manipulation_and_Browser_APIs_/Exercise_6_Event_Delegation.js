
document.getElementById('list').addEventListener('click', (event) => {
if (event.target && event.target.nodeName === 'LI') {
console.log('List item clicked:', event.target.textContent);
}
});

Explanation:
Instead of attaching an event to each list item, event delegation attaches a single listener to the parent element and uses event bubbling to detect which child was clicked.
