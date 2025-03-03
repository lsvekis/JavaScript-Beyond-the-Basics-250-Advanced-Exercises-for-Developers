
function lazy(fn) {
let evaluated = false, value;
return function() {
if (!evaluated) {
value = fn();
evaluated = true;
}
return value;
};
}

const lazyValue = lazy(() => {
console.log('Computing...');
return 42;
});
console.log('First call:', lazyValue()); // Computes and returns 42
console.log('Second call:', lazyValue()); // Returns cached 42

Explanation:
Lazy evaluation defers expensive computations until necessary and caches the result.
