
const CounterModule = (() => {
let count = 0;
return {
increment() {
return ++count;
},
getCount() {
return count;
}
};
})();
console.log(CounterModule.increment()); // Output: 1

Explanation:
IIFE modules encapsulate private state while exposing public methods.
