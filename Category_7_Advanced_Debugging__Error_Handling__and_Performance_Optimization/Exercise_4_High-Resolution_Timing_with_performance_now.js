
const start = performance.now();
for (let i = 0; i < 1e6; i++) {} // Simulate work
const end = performance.now();
console.log(`Execution time: ${(end - start).toFixed(2)} ms`);

Explanation:
performance.now() provides sub-millisecond timing precision, which is useful for profiling fine-grained performance issues.
