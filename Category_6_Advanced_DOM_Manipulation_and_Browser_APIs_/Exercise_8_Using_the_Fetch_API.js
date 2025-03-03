
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

Explanation:
The Fetch API enables asynchronous HTTP requests. This example retrieves a post from a placeholder API and logs the parsed JSON data.
