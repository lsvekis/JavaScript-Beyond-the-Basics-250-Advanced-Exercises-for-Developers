
class TaskScheduler {
constructor() {
this.queue = Promise.resolve();
}
addTask(task) {
this.queue = this.queue.then(() => task());
return this.queue;
}
}
const scheduler = new TaskScheduler();
scheduler.addTask(() => new Promise(r => setTimeout(() => { console.log('Task 1'); r(); }, 500)));
scheduler.addTask(() => new Promise(r => setTimeout(() => { console.log('Task 2'); r(); }, 300)));

Explanation:
By chaining tasks with promises, tasks are executed one after another in a controlled sequence.
