
const target = {};
const proxy = new Proxy(target, {
set(obj, prop, value) {
console.log(`Setting ${prop} to ${value}`);
return Reflect.set(obj, prop, value);
}
});
proxy.foo = 'bar'; // Logs: Setting foo to bar

Explanation:
Combining Proxies with Reflect allows you to extend default object behavior without losing standard functionality.
