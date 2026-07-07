class ICICI {
    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }
    getBalance() {
        return this.#balance;
    }
    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("This is not allowed");
        }
    }
}
let rupesh = new ICICI("Rupesh", 1000);
console.log(rupesh.getBalance());
rupesh.setBalance(1000000, false);
console.log(rupesh.getBalance());

let rupesh_father = new ICICI("Ganesh", 2000);
console.log(rupesh_father.getBalance());
rupesh_father.setBalance(3000000, true);
console.log(rupesh_father.getBalance());
