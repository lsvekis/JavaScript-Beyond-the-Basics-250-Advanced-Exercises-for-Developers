
function bindData(obj, prop, el) {
return new Proxy(obj, {
set(target, key, value) {
target[key] = value;
if (key === prop) el.textContent = value;
return true;
}
});
}
const data = { message: 'Hello' };
const element = document.createElement('div');
document.body.appendChild(element);
const boundData = bindData(data, 'message', element);
boundData.message = 'Data binding works!'; // Element updates automatically

Explanation:
Using Proxy for data binding simplifies synchronization between JavaScript objects and the UI.
