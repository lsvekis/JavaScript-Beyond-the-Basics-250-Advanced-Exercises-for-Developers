
const data = {
title: 'Nested',
info: {
author: 'Bob',
tags: ['js', 'es6', 'advanced']
}
};
const {
info: { author, tags: [firstTag, ...otherTags] }
} = data;
console.log(author);      // Output: "Bob"
console.log(firstTag);    // Output: "js"
console.log(otherTags);   // Output: ["es6", "advanced"]

Explanation:
Nested destructuring extracts properties deep inside objects and arrays, even capturing remaining elements with rest syntax.
