
Function.prototype.customBind = function(context, ...args) {
const fn = this;
return function(...newArgs) {
return fn.apply(context, args.concat(newArgs));
};
};

const obj = {
x: 42,
getX: function() {
return this.x;
}
};

const getX = obj.getX;
const boundGetX = getX.customBind(obj);
console.log(boundGetX()); // Output: 42

Explanation:
customBind saves the context (this value) and any preset arguments. When the bound function is later called, it uses apply to ensure the correct context and argument list.
