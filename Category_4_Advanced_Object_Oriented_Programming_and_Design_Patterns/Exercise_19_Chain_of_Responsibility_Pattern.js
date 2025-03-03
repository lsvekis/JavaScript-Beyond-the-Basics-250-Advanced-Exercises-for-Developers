
class Handler {
setNext(handler) {
this.nextHandler = handler;
return handler;
}
handle(request) {
if (this.nextHandler) {
return this.nextHandler.handle(request);
}
return null;
}
}

class ConcreteHandler1 extends Handler {
handle(request) {
if (request < 10) {
return `Handler1 handled request ${request}`;
}
return super.handle(request);
}
}

class ConcreteHandler2 extends Handler {
handle(request) {
if (request >= 10 && request < 20) {
return `Handler2 handled request ${request}`;
}
return super.handle(request);
}
}

const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
handler1.setNext(handler2);

console.log(handler1.handle(5));  // Output: "Handler1 handled request 5"
console.log(handler1.handle(15)); // Output: "Handler2 handled request 15"

Explanation:
Each handler in the chain gets a chance to process the request. If it cannot handle it, the request is passed along to the next handler.
