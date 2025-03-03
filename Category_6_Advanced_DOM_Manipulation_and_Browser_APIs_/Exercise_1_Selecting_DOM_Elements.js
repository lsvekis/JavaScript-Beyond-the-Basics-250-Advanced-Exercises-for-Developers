
// Select by ID
const header = document.getElementById('header');

// Select by class name (returns HTMLCollection)
const items = document.getElementsByClassName('item');

// Select by tag name (returns HTMLCollection)
const paragraphs = document.getElementsByTagName('p');

// Select using querySelector (first match)
const firstButton = document.querySelector('button');

// Select using querySelectorAll (returns NodeList)
const allButtons = document.querySelectorAll('button');

console.log(header, items, paragraphs, firstButton, allButtons);

Explanation:
This exercise demonstrates various DOM selection methods including legacy (getElementById, getElementsByClassName) and modern approaches (querySelector, querySelectorAll).
