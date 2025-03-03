
// resourceModule.js
const resourceURL = new URL('./data.json', import.meta.url);
export { resourceURL };


// main.js
import { resourceURL } from './resourceModule.js';
console.log('Resolved resource URL:', resourceURL.href);

Explanation:
The URL API helps compute absolute URLs from relative paths based on the module’s location.
