class testCase {
    //Below one is an paramaterised constructor
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display() {//As this is within class it become method
        console.log(this.name + " -> " + this.status + " -> " + this.priority);
    }
}
//Below is function
function f1() {//As this is outside of class it will be function only

}
//Below is an argument
let loginTC = new testCase("Login TC", "Pass", "P0");
let signUpTC = new testCase("SignUp TC", "Fail", "P1");
loginTC.display();

//Function Vs Method
//Method is functions but inside the class
//Every method is a function
//functions are outside the class but method are within the class