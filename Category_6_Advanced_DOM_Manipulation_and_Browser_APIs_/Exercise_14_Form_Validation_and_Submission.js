
document.getElementById('myForm').addEventListener('submit', function(event) {
event.preventDefault();
const email = document.getElementById('email').value;
const errorDiv = document.getElementById('error');

if (!email.includes('@')) {
errorDiv.textContent = 'Please enter a valid email address.';
} else {
errorDiv.textContent = '';
console.log('Form submitted:', email);
// Proceed with submission (e.g., via fetch)
}
});

Explanation:
This code prevents the default form submission to perform client-side validation, ensuring that user input meets the criteria before processing.
