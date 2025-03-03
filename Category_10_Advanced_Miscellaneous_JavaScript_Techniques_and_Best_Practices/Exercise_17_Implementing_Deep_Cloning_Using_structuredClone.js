
const original = { a: 1, b: { c: 2 } };
const clone = structuredClone ? structuredClone(original) : JSON.parse(JSON.stringify(original));
console.log('Clone:', clone);

Explanation:
structuredClone (or a JSON fallback) creates deep copies of objects, ensuring nested structures are duplicated.
