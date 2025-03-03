
class ValidationError extends Error {
constructor(message) {
super(message);
this.name = 'ValidationError';
}
}

function validateAge(age) {
if (age < 0 || age > 120) {
throw new ValidationError('Age must be between 0 and 120.');
}
return true;
}

try {
validateAge(150);
} catch (error) {
console.error(error.name + ':', error.message);
}

Explanation:
Custom error classes help categorize and differentiate errors, making debugging and error handling more precise.
