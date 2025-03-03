
function simplePromise(executor) {
let onResolve, onReject;
let fulfilled = false, rejected = false, value;

const resolve = (val) => {
fulfilled = true;
value = val;
if (onResolve) onResolve(val);
};

const reject = (err) => {
rejected = true;
value = err;
if (onReject) onReject(err);
};

executor(resolve, reject);

return {
then: function(callback) {
onResolve = callback;
if (fulfilled) callback(value);
return this;
},
catch: function(callback) {
onReject = callback;
if (rejected) callback(value);
return this;
}
};
}

simplePromise((resolve, reject) => {
setTimeout(() => resolve('Done!'), 500);
}).then(console.log); // Logs "Done!" after 500ms

Explanation:
This basic promise implementation uses closures to keep track of whether it’s fulfilled or rejected and stores the corresponding callback functions.
