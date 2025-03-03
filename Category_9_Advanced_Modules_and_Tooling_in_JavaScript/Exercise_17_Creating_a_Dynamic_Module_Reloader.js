
async function reloadModule(path) {
const module = await import(`${path}?t=${Date.now()}`);
return module;
}

reloadModule('./math.js').then(mathModule => {
console.log('Reloaded add:', mathModule.add(5, 5));
});

Explanation:
Appending a timestamp forces the browser to fetch a fresh copy, allowing dynamic reloading.
