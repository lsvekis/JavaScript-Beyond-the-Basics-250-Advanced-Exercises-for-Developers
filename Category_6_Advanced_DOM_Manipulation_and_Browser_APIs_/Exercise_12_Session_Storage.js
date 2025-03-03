
// Save data
sessionStorage.setItem('sessionID', 'abc123');

// Retrieve data
const sessionID = sessionStorage.getItem('sessionID');
console.log(sessionID); // Output: "abc123"

// Clear session storage
sessionStorage.clear();

Explanation:
Session Storage stores data for a single browser session, automatically clearing when the browser or tab is closed.
