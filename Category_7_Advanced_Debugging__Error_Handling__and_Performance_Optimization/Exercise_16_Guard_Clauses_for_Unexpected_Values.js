
function processData(data) {
if (!data) {
console.warn('No data provided!');
return;
}
// Proceed with processing
console.log('Processing:', data);
}

processData(null); // Logs a warning and exits early
processData('Valid data'); // Continues processing

Explanation:
Guard clauses provide an early exit from a function when inputs are invalid, making the code cleaner and more robust.
