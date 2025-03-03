
async function loadModules(modules) {
return Promise.all(modules.map(path => import(path)));
}

loadModules(['./math.js', './greet.js']).then(([math, greetModule]) => {
console.log('Sum:', math.add(2, 2));
console.log(greetModule.default('Bob'));
});

Explanation:
This approach concurrently loads multiple modules, reducing overall wait times.
