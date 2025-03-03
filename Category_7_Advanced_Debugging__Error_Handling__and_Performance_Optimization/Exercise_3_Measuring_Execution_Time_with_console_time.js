
console.time('calculation');
let sum = 0;
for (let i = 0; i < 1e6; i++) {
sum += i;
}
console.timeEnd('calculation'); // Logs duration for the loop

Explanation:
Wrapping code with console.time and console.timeEnd (using the same label) prints the elapsed time, helping you identify performance bottlenecks.
