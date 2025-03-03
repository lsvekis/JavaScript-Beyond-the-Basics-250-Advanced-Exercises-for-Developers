
class StrategyContext {
constructor(strategy) {
this.strategy = strategy;
}
execute(a, b) {
return this.strategy(a, b);
}
}

const addStrategy = (a, b) => a + b;
const multiplyStrategy = (a, b) => a * b;

const contextAdd = new StrategyContext(addStrategy);
console.log(contextAdd.execute(3, 4)); // Output: 7

const contextMultiply = new StrategyContext(multiplyStrategy);
console.log(contextMultiply.execute(3, 4)); // Output: 12

Explanation:
By injecting different strategies, you can change the algorithm used without modifying the context class.
