
function safeJSONParse(str) {
try {
return JSON.parse(str);
} catch (error) {
console.error('Invalid JSON:', error.message);
return null;
}
}

const goodJSON = '{"name": "Alice"}';
const badJSON = '{"name": "Alice"';
console.log(safeJSONParse(goodJSON)); // Parsed object
console.log(safeJSONParse(badJSON));  // Returns null and logs an error

Explanation:
By wrapping JSON.parse in a try/catch block, you can gracefully handle errors from malformed JSON strings.
