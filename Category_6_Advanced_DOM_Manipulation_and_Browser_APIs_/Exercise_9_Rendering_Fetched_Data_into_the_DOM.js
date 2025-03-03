
fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => response.json())
.then(user => {
const userDiv = document.createElement('div');
userDiv.innerHTML = `<h2>${user.name}</h2><p>Email: ${user.email}</p>`;
document.body.appendChild(userDiv);
});

Explanation:
Data fetched from an API is rendered as HTML and appended to the document, dynamically updating the page content.
