
async function asyncPool(poolLimit, tasks, taskFn) {
const results = [];
const executing = [];
for (const task of tasks) {
const p = Promise.resolve().then(() => taskFn(task));
results.push(p);

if (poolLimit <= tasks.length) {
const e = p.then(() => executing.splice(executing.indexOf(e), 1));
executing.push(e);
if (executing.length >= poolLimit) {
await Promise.race(executing);
}
}
}
return Promise.all(results);
}

// Example tasks:
const tasks = [1, 2, 3, 4, 5];
asyncPool(2, tasks, async (num) => {
await sleep(500);
console.log('Processed:', num);
return num * 2;
}).then(results => console.log('All results:', results));

Explanation:
The asyncPool function limits concurrency by keeping track of currently executing tasks and waiting for one to finish before starting a new one.
