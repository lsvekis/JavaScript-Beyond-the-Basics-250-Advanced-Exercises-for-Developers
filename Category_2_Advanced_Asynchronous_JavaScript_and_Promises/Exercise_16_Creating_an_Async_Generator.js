
async function* asyncGenerator() {
yield await sleep(500).then(() => 1);
yield await sleep(500).then(() => 2);
yield await sleep(500).then(() => 3);
}

(async () => {
for await (const value of asyncGenerator()) {
console.log('Async Generator:', value);
}
})();

Explanation:
An async generator function returns an asynchronous iterator. The for await...of loop is used to consume its yielded values as they become available.
