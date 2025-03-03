
const oldElement = document.getElementById('old');
oldElement.parentNode.removeChild(oldElement);

const replacement = document.createElement('p');
replacement.textContent = 'This is the new element!';
const container = document.getElementById('container');
container.replaceChild(replacement, container.firstElementChild);

Explanation:
This demonstrates how to remove an element and replace a child element using standard DOM methods.
