
const counterModule = (function() {
let count = 0; // Private variable
return {
increment: function() {
count++;
return count;
},
decrement: function() {
count--;
return count;
},
getCount: function() {
return count;
}
};
})();

console.log(counterModule.increment()); // Output: 1
console.log(counterModule.getCount());  // Output: 1

Explanation:
The IIFE creates a private scope for count. Only the methods returned (increment, decrement, getCount) can access and modify it.
