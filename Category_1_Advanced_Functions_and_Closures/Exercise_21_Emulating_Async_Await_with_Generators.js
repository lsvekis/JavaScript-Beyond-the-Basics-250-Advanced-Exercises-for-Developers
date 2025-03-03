
function run(generatorFunc) {
const iterator = generatorFunc();
function iterate(iteration) {
if (iteration.done) return Promise.resolve(iteration.value);
return Promise.resolve(iteration.value).then(x => iterate(iterator.next(x)));
}
return iterate(iterator.next());
}

function* asyncGenerator() {
const data1 = yield new Promise(resolve => setTimeout(() => resolve(10), 500));
const data2 = yield new Promise(resolve => setTimeout(() => resolve(20), 500));
return data1 + data2;
}

run(asyncGenerator).then(result => console.log(result)); // Output: 30

Explanation:
The run function processes each yield from the generator, waiting for the promise to resolve before continuing—thus mimicking the behavior of async/await.
