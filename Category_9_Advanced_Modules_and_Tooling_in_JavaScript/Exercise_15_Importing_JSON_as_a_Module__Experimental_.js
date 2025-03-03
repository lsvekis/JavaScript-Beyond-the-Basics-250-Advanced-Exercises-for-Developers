
// main.js
import('https://jsonplaceholder.typicode.com/todos/1.json')
.then(module => console.log('JSON module:', module.default))
.catch(err => console.error('JSON import error:', err));

Explanation:
Some environments allow importing JSON directly as modules. (Note: This may require specific configuration.)
