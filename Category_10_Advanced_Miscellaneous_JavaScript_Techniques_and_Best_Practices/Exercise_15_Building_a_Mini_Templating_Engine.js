
function render(template, data) {
return template.replace(/\{\{(.*?)\}\}/g, (_, key) => data[key.trim()] || '');
}
const template = 'Hello, {{ name }}! You are {{ age }} years old.';
console.log(render(template, { name: 'Alice', age: 30 }));

Explanation:
This simple templating engine uses regex to replace placeholders with corresponding values from a data object.
