
// Save data
localStorage.setItem('username', 'john_doe');

// Retrieve data
const username = localStorage.getItem('username');
console.log(username); // Output: "john_doe"

// Remove data
localStorage.removeItem('username');

Explanation:
Local Storage lets you persist key-value pairs in the browser even after the page is refreshed.
