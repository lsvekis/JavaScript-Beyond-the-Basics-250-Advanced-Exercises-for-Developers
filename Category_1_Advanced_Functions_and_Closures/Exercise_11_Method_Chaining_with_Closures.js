
function Calculator(initialValue = 0) {
let value = initialValue;
return {
add: function(num) {
value += num;
return this;
},
subtract: function(num) {
value -= num;
return this;
},
multiply: function(num) {
value *= num;
return this;
},
getResult: function() {
return value;
}
};
}

const result = Calculator(5)
.add(3)
.subtract(2)
.multiply(4)
.getResult();

console.log(result); // Output: 24

Explanation:
Each method modifies the internal state (value) and returns this so that methods can be chained in a fluent interface.
