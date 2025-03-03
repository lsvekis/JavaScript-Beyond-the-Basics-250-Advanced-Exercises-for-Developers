
// state.js
let state = { count: 0 };
export function getState() {
return state;
}
export function setState(newState) {
state = { ...state, ...newState };
}


// main.js
import { getState, setState } from './state.js';
console.log('Initial State:', getState());
setState({ count: 42 });
console.log('Updated State:', getState());

Explanation:
This module centralizes state management, a concept used in many frameworks.
