
const targetObj = { name: 'Bob' };
const proxy = new Proxy(targetObj, {
get(target, prop) {
if (!(prop in target)) {
console.warn(`Property "${prop}" does not exist.`);
return undefined;
}
return target[prop];
}
});

console.log(proxy.name);   // Output: "Bob"
console.log(proxy.age);    // Logs warning, returns undefined

Explanation:
A Proxy can intercept and customize fundamental operations. Here, it warns when accessing properties that don't exist.
