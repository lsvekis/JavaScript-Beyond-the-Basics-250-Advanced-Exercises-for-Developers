
class Car {
constructor(model) {
this.model = model;
}
}

class CarFactory {
createCar(model) {
return new Car(model);
}
}

const factory = new CarFactory();
const car1 = factory.createCar('Toyota');
console.log(car1.model); // Output: "Toyota"

Explanation:
The factory class handles object creation. Consumers call the factory method without needing to know the details of the Car constructor.
