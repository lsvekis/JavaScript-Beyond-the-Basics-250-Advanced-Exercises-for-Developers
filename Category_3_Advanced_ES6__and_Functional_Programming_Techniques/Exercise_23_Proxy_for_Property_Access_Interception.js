
const target = { message: 'Hello' };
const handler = {
get(obj, prop) {
if (prop === 'message') {
return obj[prop] + ' World!';
}
return obj[prop];
}
};
const proxy = new Proxy(target, handler);
console.log(proxy.message); // Output: "Hello World!"

Explanation:
A Proxy intercepts operations on an object (like property access), allowing you to redefine behavior dynamically.
