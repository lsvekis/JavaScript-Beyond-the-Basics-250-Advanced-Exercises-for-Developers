
if (import.meta.resolve) {
console.log('Resolved:', import.meta.resolve('./math.js'));
} else {
console.log('import.meta.resolve not supported in this environment.');
}

Explanation:
Some environments provide import.meta.resolve to obtain absolute URLs for module specifiers.
