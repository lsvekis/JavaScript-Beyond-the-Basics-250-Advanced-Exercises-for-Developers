
class House {
constructor() {
this.windows = 0;
this.doors = 0;
this.roof = '';
}
}

class HouseBuilder {
constructor() {
this.house = new House();
}
addWindows(count) {
this.house.windows = count;
return this;
}
addDoors(count) {
this.house.doors = count;
return this;
}
setRoof(type) {
this.house.roof = type;
return this;
}
build() {
return this.house;
}
}

const builder = new HouseBuilder();
const house = builder.addWindows(4).addDoors(2).setRoof('Gable').build();
console.log(house); // House with 4 windows, 2 doors, roof: "Gable"

Explanation:
The builder pattern allows step‑by‑step construction of an object. The builder methods return the builder itself, enabling method chaining.
