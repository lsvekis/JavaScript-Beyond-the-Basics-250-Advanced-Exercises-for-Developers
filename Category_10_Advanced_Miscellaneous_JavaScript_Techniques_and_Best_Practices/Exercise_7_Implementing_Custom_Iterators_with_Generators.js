
function* countdown(n) {
while (n > 0) {
yield n--;
}
}
for (const num of countdown(3)) {
console.log(num); // Outputs: 3, 2, 1
}

Explanation:
Generators provide a concise way to create iterators for custom sequences.
