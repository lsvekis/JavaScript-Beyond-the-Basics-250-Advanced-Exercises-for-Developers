Objective:
Offload heavy computation to a background thread using a Web Worker.
Code (main.js):

const worker = new Worker('worker.js');
worker.postMessage(1000000);
worker.onmessage = function(e) {
console.log('Result from worker:', e.data);
};

Code (worker.js):

onmessage = function(e) {
let sum = 0;
for (let i = 1; i <= e.data; i++) {
sum += i;
}
postMessage(sum);
};

Explanation:
Web Workers run scripts in background threads, ensuring that heavy calculations don’t block the main UI thread.
