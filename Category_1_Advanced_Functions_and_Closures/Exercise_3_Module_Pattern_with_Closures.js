
const myModule = (function() {
let privateData = 'secret';
function privateMethod() {
return privateData;
}
return {
getSecret: function() {
return privateMethod();
}
};
})();

console.log(myModule.getSecret()); // Output: "secret"

Explanation:
This pattern hides internal details (privateData and privateMethod) while exposing only what is necessary through the returned object.
