
const settings = { theme: 'dark' };
const { theme, fontSize = 14 } = settings;
console.log(theme, fontSize); // Output: "dark" 14

Explanation:
If a property doesn’t exist in the source object, a default value (here, 14) is used.
