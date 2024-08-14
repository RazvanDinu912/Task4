/* class bankAccount {
    constructor(accountNumberValue, accountHolderValue, balanceValue){
        this.accountNumber = accountNumberValue
        this.accountHolder = accountHolderValue
        this.balance = balanceValue
    }
    accountNumber
    accountHolder
    balance = 0
    depositing(ammount){
        this.balance += ammount
    }
    withdrawing(ammount){
        this.balance -= ammount
    }
    checkingBalance() {
        return this.balance
    }
}


bankAccount1 = new bankAccount(10, "Razvan", 0)
// bankAccount1.depositing(10)
bankAccount1.accountNumber
bankAccount2 = new bankAccount(20, "Dinu", 30)
bankAccount2.depositing(5)



console.log(bankAccount1.depositing(7))
console.log(bankAccount2.accountNumber) */


import bankAccount from './bankAccount' ;
const account1 = new bankAccount(468263, 'Razvan Dinu');
const account2 = new bankAccount(783967, 'Andreea Mocanu', 1000);

account1.deposit(500);
account2.deposit(200);

account1.withdraw(200);
account2.withdraw(300);

account1.checkBalance();
account2.checkBalance();