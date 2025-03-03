
if (typeof WeakRef !== 'undefined' && typeof FinalizationRegistry !== 'undefined') {
const registry = new FinalizationRegistry(token => {
console.log('Object with token', token, 'was garbage collected');
});
let obj = { data: 'Important' };
const weakRef = new WeakRef(obj);
registry.register(obj, 'objToken');
obj = null; // Allow garbage collection
}

Explanation:
WeakRef and FinalizationRegistry help monitor when objects are collected, aiding in memory management.
