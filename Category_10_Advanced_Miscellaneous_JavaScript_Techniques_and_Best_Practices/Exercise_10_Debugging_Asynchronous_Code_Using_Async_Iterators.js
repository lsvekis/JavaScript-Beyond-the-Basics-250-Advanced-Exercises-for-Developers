
async function* asyncNumbers() {
for (let i = 1; i <= 3; i++) {
await new Promise(r => setTimeout(r, 300));
console.log('Yielding:', i);
yield i;
}
}
(async () => {
for await (const num of asyncNumbers()) {
console.log('Received:', num);
}
})();

Explanation:
Using async iterators helps debug the flow of asynchronous loops by logging intermediate values.
