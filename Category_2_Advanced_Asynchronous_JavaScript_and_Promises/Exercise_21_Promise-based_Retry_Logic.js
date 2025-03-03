
async function retry(fn, retries = 3, delay = 500) {
for (let i = 0; i < retries; i++) {
try {
return await fn();
} catch (error) {
if (i === retries - 1) throw error;
await sleep(delay);
}
}
}

let attempt = 0;
async function unstableOperation() {
attempt++;
if (attempt < 3) {
throw 'Failed attempt';
}
return 'Success on attempt ' + attempt;
}

retry(unstableOperation, 5, 500)
.then(console.log) // Output: "Success on attempt 3"
.catch(console.error);

Explanation:
The retry function tries to execute the asynchronous operation repeatedly, waiting between attempts until a successful result is obtained or the retry limit is reached.
