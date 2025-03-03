
class Sedan {
constructor() {
this.type = 'Sedan';
}
}

class SUV {
constructor() {
this.type = 'SUV';
}
}

class CarFactory {
createCar(carType) {
switch(carType) {
case 'Sedan': return new Sedan();
case 'SUV': return new SUV();
default: throw new Error('Unknown car type');
}
}
}

const factory = new CarFactory();
const sedan = factory.createCar('Sedan');
const suv = factory.createCar('SUV');
console.log(sedan.type); // Output: "Sedan"
console.log(suv.type);   // Output: "SUV"

Explanation:
An abstract factory encapsulates the creation of related objects (here, different car types) and returns them based on input parameters.
