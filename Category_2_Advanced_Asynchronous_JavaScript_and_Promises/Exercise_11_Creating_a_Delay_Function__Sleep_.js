
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

sleep(1000).then(() => console.log('Waited 1 second'));

Explanation:
The sleep function creates a Promise that resolves after a given number of milliseconds, making it useful for delaying asynchronous execution.
