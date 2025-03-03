
const targetNode = document.getElementById('observed');
const observer = new MutationObserver(mutations => {
mutations.forEach(mutation => console.log('Mutation detected:', mutation));
});

observer.observe(targetNode, { childList: true, subtree: true });

// Later, modifying the target node:
targetNode.appendChild(document.createElement('p'));

Explanation:
MutationObserver allows you to react to DOM changes, such as when child elements are added or removed.
