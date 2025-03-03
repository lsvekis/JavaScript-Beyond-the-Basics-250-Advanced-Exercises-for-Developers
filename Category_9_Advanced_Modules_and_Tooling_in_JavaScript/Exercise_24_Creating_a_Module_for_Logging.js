
// logger.js
export function log(message) {
console.log(`[LOG] ${message}`);
}
export function error(message) {
console.error(`[ERROR] ${message}`);
}


// main.js
import { log, error } from './logger.js';
log('This is a log message.');
error('This is an error message.');

Explanation:
A dedicated logging module centralizes logging behavior and can later be enhanced (e.g., with timestamps).
