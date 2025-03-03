
const config = {
apiUrl: 'https://api.example.com',
timeout: 5000
};

Object.freeze(config);

try {
config.timeout = 3000; // This change will fail silently in non-strict mode or throw an error in strict mode
} catch (error) {
console.error('Cannot modify frozen object:', error.message);
}

console.log(config);

Explanation:
Object.freeze makes an object immutable, reducing the chance of bugs due to unintended changes.
