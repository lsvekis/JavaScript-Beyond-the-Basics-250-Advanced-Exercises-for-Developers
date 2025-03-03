
// heavyModule.js
export function heavyOperation() {
return 'Heavy operation result';
}


// main.js
document.getElementById('loadBtn').addEventListener('click', async () => {
const { heavyOperation } = await import('./heavyModule.js');
console.log(heavyOperation());
});

Explanation:
Lazy loading reduces initial bundle size by loading code only when required.
