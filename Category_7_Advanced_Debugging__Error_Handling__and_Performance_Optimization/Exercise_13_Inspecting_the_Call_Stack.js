
function printStack() {
const stack = new Error().stack;
console.log('Call Stack:', stack);
}

function level1() {
level2();
}

function level2() {
printStack();
}

level1();

Explanation:
By creating a new Error and logging its stack property, you can trace the function calls leading up to that point—a useful debugging aid.
