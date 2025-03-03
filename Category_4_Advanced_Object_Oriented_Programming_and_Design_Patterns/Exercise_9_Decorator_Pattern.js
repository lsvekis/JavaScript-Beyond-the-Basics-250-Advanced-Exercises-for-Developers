
class Coffee {
cost() {
return 5;
}
}

class MilkDecorator {
constructor(coffee) {
this.coffee = coffee;
}
cost() {
return this.coffee.cost() + 1;
}
}

class SugarDecorator {
constructor(coffee) {
this.coffee = coffee;
}
cost() {
return this.coffee.cost() + 0.5;
}
}

let myCoffee = new Coffee();
myCoffee = new MilkDecorator(myCoffee);
myCoffee = new SugarDecorator(myCoffee);
console.log(myCoffee.cost()); // Output: 6.5

Explanation:
Each decorator wraps the original object and adds extra functionality—in this case, additional cost.
