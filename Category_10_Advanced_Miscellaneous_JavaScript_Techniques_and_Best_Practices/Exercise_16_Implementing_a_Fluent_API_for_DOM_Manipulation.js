
class DOMHelper {
constructor(selector) {
this.el = document.querySelector(selector);
}
addClass(cls) {
this.el.classList.add(cls);
return this;
}
setText(text) {
this.el.textContent = text;
return this;
}
}
const helper = new DOMHelper('#myElement');
helper.addClass('active').setText('Hello, Fluent API!');

Explanation:
Chaining methods by returning the context creates a fluent API that simplifies multiple DOM operations.
