
async function* asyncNumbers() {
for (let i = 0; i < 3; i++) {
await sleep(300);
yield i;
}
}

(async () => {
for await (const num of asyncNumbers()) {
console.log('Number:', num);
}
})();

Explanation:
This example demonstrates how to asynchronously iterate over values yielded by an async generator, pausing execution between each yield.
