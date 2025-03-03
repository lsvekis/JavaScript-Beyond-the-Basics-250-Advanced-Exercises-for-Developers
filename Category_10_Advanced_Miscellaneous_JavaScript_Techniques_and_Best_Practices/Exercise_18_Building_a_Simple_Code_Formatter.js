Objective:
Create a function that formats JavaScript code by indenting blocks.
Code:
(A simplified demo—not a full formatter)

function simpleFormatter(code) {
return code.replace(/{/g, '{\n  ').replace(/}/g, '\n}');
}
const sampleCode = 'function test(){console.log("Hello");}';
console.log(simpleFormatter(sampleCode));

Explanation:
This rudimentary formatter demonstrates how string manipulation can be used to improve code readability.
