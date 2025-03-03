
const Utils = (() => {
function isEven(n) {
return n % 2 === 0;
}
function isOdd(n) {
return !isEven(n);
}
return { isEven, isOdd };
})();
console.log('4 is even:', Utils.isEven(4));

Explanation:
This pattern encapsulates utility functions in a single global object without polluting the global namespace.
