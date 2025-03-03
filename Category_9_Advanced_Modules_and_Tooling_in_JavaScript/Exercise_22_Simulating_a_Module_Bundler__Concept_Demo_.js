
async function bundleModules(paths) {
let bundle = '';
for (const path of paths) {
const module = await import(path);
bundle += JSON.stringify(module);
}
console.log('Simulated bundle:', bundle);
}
bundleModules(['./math.js', './greet.js']);

Explanation:
This simplified demonstration shows the idea behind module bundling—combining multiple module outputs into one.
