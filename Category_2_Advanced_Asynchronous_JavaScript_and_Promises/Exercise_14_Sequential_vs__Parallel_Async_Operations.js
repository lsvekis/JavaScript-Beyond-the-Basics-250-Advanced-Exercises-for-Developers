
async function sequentialTasks() {
const a = await sleep(500).then(() => 'A');
const b = await sleep(500).then(() => 'B');
console.log('Sequential:', a, b);
}

async function parallelTasks() {
const promiseA = sleep(500).then(() => 'A');
const promiseB = sleep(500).then(() => 'B');
const [a, b] = await Promise.all([promiseA, promiseB]);
console.log('Parallel:', a, b);
}

sequentialTasks(); // Takes ~1s total
parallelTasks();   // Takes ~0.5s total

Explanation:
In the sequential approach, tasks run one after the other, while in the parallel approach, tasks run concurrently using Promise.all.
