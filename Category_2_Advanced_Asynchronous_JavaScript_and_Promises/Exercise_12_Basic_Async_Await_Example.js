
async function fetchData() {
const data = await new Promise(resolve => setTimeout(() => resolve('Data fetched'), 1000));
console.log(data);
}

fetchData(); // Output after 1 second: "Data fetched"

Explanation:
The await keyword pauses the execution of the async function until the Promise resolves, leading to more readable asynchronous code.
