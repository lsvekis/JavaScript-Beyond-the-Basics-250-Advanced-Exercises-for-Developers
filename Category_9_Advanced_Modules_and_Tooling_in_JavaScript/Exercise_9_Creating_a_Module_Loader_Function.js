
const moduleCache = new Map();
async function loadModule(modulePath) {
if (moduleCache.has(modulePath)) {
return moduleCache.get(modulePath);
}
const module = await import(modulePath);
moduleCache.set(modulePath, module);
return module;
}

// Usage:
loadModule('./math.js').then(mod => console.log(mod.add(5, 7)));

Explanation:
This loader caches dynamically imported modules to prevent redundant network requests.
