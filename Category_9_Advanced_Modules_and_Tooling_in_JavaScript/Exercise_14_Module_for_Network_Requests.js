
// api.js
export async function getJSON(url) {
const response = await fetch(url);
return response.json();
}


// main.js
import { getJSON } from './api.js';
getJSON('https://jsonplaceholder.typicode.com/todos/1').then(data => console.log(data));

Explanation:
This module abstracts network requests, making API calls more modular and testable.
