
performance.mark('startTask');
for (let i = 0; i < 1e5; i++) {} // Simulated task
performance.mark('endTask');
performance.measure('Task Duration', 'startTask', 'endTask');

const measures = performance.getEntriesByName('Task Duration');
console.log(`Task took ${measures[0].duration.toFixed(2)} ms`);

Explanation:
The Performance API lets you mark points in your code and then measure the duration between them. This helps in pinpointing slow operations.
