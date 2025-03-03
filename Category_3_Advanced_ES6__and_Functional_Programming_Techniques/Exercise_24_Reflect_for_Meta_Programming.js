
const targetObj = { a: 1, b: 2 };
const proxyObj = new Proxy(targetObj, {
get(target, prop, receiver) {
console.log(`Accessing property: ${prop}`);
return Reflect.get(target, prop, receiver);
}
});

console.log(proxyObj.a); // Logs: "Accessing property: a" then outputs: 1

Explanation:
The Reflect API provides methods that correspond to object operations. Here, it’s used within a Proxy to perform the default property access after logging.
