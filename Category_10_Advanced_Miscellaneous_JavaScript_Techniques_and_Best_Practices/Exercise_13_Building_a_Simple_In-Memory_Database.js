
class InMemoryDB {
constructor() {
this.store = new Map();
}
create(key, value) {
this.store.set(key, value);
}
read(key) {
return this.store.get(key);
}
update(key, value) {
this.store.set(key, value);
}
delete(key) {
this.store.delete(key);
}
}
const db = new InMemoryDB();
db.create('user', { name: 'Alice' });
console.log(db.read('user'));

Explanation:
This simple database uses a Map to store data and demonstrates basic CRUD operations.
