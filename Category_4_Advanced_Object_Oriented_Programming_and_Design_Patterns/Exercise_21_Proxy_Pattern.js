
class ExpensiveObject {
constructor() {
console.log('ExpensiveObject created');
}
operation() {
return 'Operation result';
}
}

class VirtualProxy {
constructor() {
this._object = null;
}
operation() {
if (!this._object) {
this._object = new ExpensiveObject();
}
return this._object.operation();
}
}

const proxy = new VirtualProxy();
console.log(proxy.operation()); // Creates ExpensiveObject then returns result
console.log(proxy.operation()); // Uses cached object; no new creation

Explanation:
A virtual proxy delays the creation of an expensive object until it is first needed, improving performance.
