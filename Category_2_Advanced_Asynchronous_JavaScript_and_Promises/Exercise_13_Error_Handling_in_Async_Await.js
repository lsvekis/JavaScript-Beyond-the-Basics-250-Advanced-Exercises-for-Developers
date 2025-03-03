
async function fetchData() {
try {
const data = await new Promise((resolve, reject) => {
setTimeout(() => reject('Fetch error'), 1000);
});
console.log(data);
} catch (error) {
console.error('Caught error:', error); // Output: "Caught error: Fetch error"
}
}

fetchData();

Explanation:
Using try/catch inside an async function allows you to capture errors from rejected Promises and handle them gracefully.
