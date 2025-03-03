
function asyncOperation(callback) {
setTimeout(() => {
const error = null;
const data = 'Success';
callback(error, data);
}, 1000);
}

asyncOperation((err, data) => {
if (err) {
console.error('Error:', err);
} else {
console.log('Data:', data); // Output after 1 second: "Data: Success"
}
});

Explanation:
This example follows the error-first callback convention—if an error occurs, it is passed as the first argument; otherwise, data is returned.
