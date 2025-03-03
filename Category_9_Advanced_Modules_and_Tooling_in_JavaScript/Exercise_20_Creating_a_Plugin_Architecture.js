
// pluginManager.js
const plugins = [];
export function registerPlugin(plugin) {
plugins.push(plugin);
}
export function runPlugins(data) {
plugins.forEach(plugin => plugin(data));
}


// main.js
import { registerPlugin, runPlugins } from './pluginManager.js';
registerPlugin(data => console.log('Plugin 1:', data));
registerPlugin(data => console.log('Plugin 2:', data));
runPlugins('Event Data');
// Output: Plugin 1: Event Data
//         Plugin 2: Event Data

Explanation:
This simple plugin system demonstrates how modules can be designed to allow external extensions.
