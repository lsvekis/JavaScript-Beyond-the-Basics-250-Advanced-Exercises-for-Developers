
function* asyncGenerator() {
yield new Promise(resolve => setTimeout(() => resolve('Step 1'), 500));
yield new Promise(resolve => setTimeout(() => resolve('Step 2'), 500));
}

(async () => {
for await (const step of asyncGenerator()) {
console.log(step);
}
})();

Explanation:
Generators combined with async iteration provide a powerful pattern for sequential asynchronous tasks.
