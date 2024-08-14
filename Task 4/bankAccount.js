/*
class bankAccount {
    accountNumber
    accountHolder
    balance
    depositing(){
        this.accountNumber = 3
    }
    withdrawing(){

    }
    checkingBalance() {

    }
}
module.exports.bankAccount = bankAccount
 */

class bankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`$${amount} deposited. Current balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("insuficient funds");
        } else {
            this.balance -= amount;
            console.log(`$${amount} withdrawn. Current Balance: $${this.balance}`);
        }
    }

    checkBalance() {
        console.log(`Account balance for ${this.accountHolder}: $${this.balance}`);
    }
}

export default bankAccount;