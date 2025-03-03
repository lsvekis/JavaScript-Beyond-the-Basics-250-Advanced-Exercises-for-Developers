
async function fetchData() {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await response.json();
console.log(data);
} catch (error) {
console.error('Fetch error:', error);
}
}

fetchData();

Explanation:
Using async/await makes asynchronous code more readable by eliminating the need for chained .then() calls.
