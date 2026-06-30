//TASK 1 - Calculator
class Calculator {
    num1;
    num2;
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    addition() {
        return this.num1 + this.num2;
    }
    subtraction() {
        return this.num1 - this.num2;
    }
    modulus() {
        return this.num1 % this.num2 === 0;
    }
    division() {
        return this.num1 / this.num2;
    }
    multiplication() {
        return this.num1 * this.num2;
    }
}
let output = new Calculator(10, 5);
console.log(output.addition());
console.log(output.subtraction());
console.log(output.modulus());
console.log(output.division());
console.log(output.multiplication());

//TASK 2 - Student Data
class student {
    static batch_Name = "Playwright";//static variable

    static display() {//static method
        return `Batch: ${student.batch_Name}`

    }
    constructor(name, age, batch) {
        this.name = name;//non-static variable
        this.age = age;
        this.batch = batch;
    }
    printinfo() {//non static method
        console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${student.batch_Name}, Batch: ${this.batch}`);
    }
}
const students = [
    new student("Aarav Sharma", 28, "Playwright 2x"),
    new student("Priya Verma", 32, "Playwright 2x"),
    new student("Rohit Singh", 25, "Playwright 2x"),
    new student("Neha Patel", 30, "Playwright 2x"),
    new student("Vikram Joshi", 35, "Playwright 2x"),
    new student("Ananya Gupta", 22, "Playwright 2x"),
    new student("Suresh Kumar", 40, "Playwright 2x"),
    new student("Divya Reddy", 27, "Playwright 2x"),
    new student("Manish Yadav", 33, "Playwright 2x"),
    new student("Ritika Shekhawat", 26, "Playwright 2x"),
];

students.forEach(member => member.printinfo());
