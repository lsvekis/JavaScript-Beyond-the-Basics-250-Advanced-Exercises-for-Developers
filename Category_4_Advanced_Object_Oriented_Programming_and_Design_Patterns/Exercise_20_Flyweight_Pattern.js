
class Flyweight {
constructor(sharedState) {
this.sharedState = sharedState;
}
operation(uniqueState) {
console.log(`Flyweight with shared ${JSON.stringify(this.sharedState)} and unique ${uniqueState}`);
}
}

class FlyweightFactory {
constructor() {
this.flyweights = {};
}
getFlyweight(sharedState) {
const key = JSON.stringify(sharedState);
if (!this.flyweights[key]) {
this.flyweights[key] = new Flyweight(sharedState);
}
return this.flyweights[key];
}
}

const factory = new FlyweightFactory();
const fly1 = factory.getFlyweight({ color: 'red' });
const fly2 = factory.getFlyweight({ color: 'red' });
fly1.operation('object1'); // Output: "Flyweight with shared {"color":"red"} and unique object1"
console.log(fly1 === fly2); // Output: true

Explanation:
The Flyweight pattern reuses objects that share common state, reducing memory consumption when many similar objects are needed.
