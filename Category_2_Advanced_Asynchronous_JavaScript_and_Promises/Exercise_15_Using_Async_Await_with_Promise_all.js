
async function fetchMultipleData() {
const promises = [
sleep(500).then(() => 'Data 1'),
sleep(700).then(() => 'Data 2')
];
const results = await Promise.all(promises);
console.log(results); // Output: ["Data 1", "Data 2"]
}

fetchMultipleData();

Explanation:
This pattern leverages Promise.all within an async function to run multiple asynchronous tasks in parallel and wait for all to complete.
