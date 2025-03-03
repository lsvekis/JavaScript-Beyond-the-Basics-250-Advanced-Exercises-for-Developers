
class OldInterface {
request() {
return 'Old request';
}
}

class NewInterface {
specificRequest() {
return 'New request';
}
}

class Adapter {
constructor(newInterface) {
this.newInterface = newInterface;
}
request() {
return this.newInterface.specificRequest();
}
}

const newObj = new NewInterface();
const adapter = new Adapter(newObj);
console.log(adapter.request()); // Output: "New request"

Explanation:
The adapter wraps an object to expose a different interface, allowing legacy code to interact with new implementations.
