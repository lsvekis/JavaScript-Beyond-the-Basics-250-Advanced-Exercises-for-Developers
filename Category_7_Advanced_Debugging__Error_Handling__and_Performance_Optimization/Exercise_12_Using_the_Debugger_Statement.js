
function compute() {
let total = 0;
for (let i = 0; i < 100; i++) {
total += i;
if (i === 50) {
debugger; // Execution will pause here if the developer console is open
}
}
return total;
}

compute();

Explanation:
The debugger statement halts execution and allows you to inspect variables and the call stack using the browser's debugging tools.
