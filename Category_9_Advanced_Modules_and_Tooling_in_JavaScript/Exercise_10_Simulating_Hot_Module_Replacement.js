
let currentModule;
async function loadOrReload() {
currentModule = await import('./hmrModule.js?' + Date.now());
currentModule.showMessage();
}
// Simulate reload every 5 seconds
setInterval(loadOrReload, 5000);

Explanation:
Appending a query parameter (like a timestamp) forces the module to reload, simulating HMR behavior.
