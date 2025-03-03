
class AsyncQueue {
constructor() {
this.queue = Promise.resolve();
}

add(task) {
this.queue = this.queue.then(() => task());
return this.queue;
}
}

const queue = new AsyncQueue();
queue.add(() => sleep(500).then(() => console.log('Task 1 complete')));
queue.add(() => sleep(300).then(() => console.log('Task 2 complete')));
queue.add(() => sleep(200).then(() => console.log('Task 3 complete')));

Explanation:
The AsyncQueue class chains asynchronous tasks so that each starts only after the previous one has finished, ensuring sequential execution.
