
function BankAccount(initialBalance) {
let balance = initialBalance;
function validateAmount(amount) {
if (amount < 0) throw new Error('Invalid amount');
}
this.deposit = function(amount) {
validateAmount(amount);
balance += amount;
return balance;
};
this.withdraw = function(amount) {
validateAmount(amount);
if (amount > balance) throw new Error('Insufficient funds');
balance -= amount;
return balance;
};
this.getBalance = function() {
return balance;
};
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // Output: 150

Explanation:
Here, the helper function validateAmount and the balance variable are private—they cannot be accessed directly from outside the constructor. Only the public methods can interact with them.
