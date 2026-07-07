class BankAccount {
    #balance = 0;//private field - hidden from outside
    deposit(amount) {//parameterised non-static method 
        if (amount > 0) {
            this.#balance = +amount;
        }
    }
    getbalance() {//non-parameterised non-static method
        return this.#balance; //Controlled access
    }
}
const account = new BankAccount();
account.deposit(100);
console.log(account.getbalance());

//console.log(account.balance);//undefined - no public field by that name
