
// dynamic.js
export function dynamicMessage() {
return 'This module was loaded dynamically!';
}


// main.js
import('./dynamic.js')
.then(module => {
console.log(module.dynamicMessage());
})
.catch(err => console.error('Error loading module:', err));

Explanation:
Dynamic imports allow modules to be loaded on demand, reducing initial load times.
