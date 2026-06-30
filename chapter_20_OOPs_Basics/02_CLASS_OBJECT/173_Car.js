class Car {
    //CAB
    //C - Constructor
    constructor(name_given_during_object_creation) {
        this.name = name_given_during_object_creation;
    }
    //A - Attribute
    //B - Behaviour
    drive() {
        console.log("I am driving", this.name);
    }
}
//Below is object creation
let tesla = new Car("Model S");
tesla.drive();

let i10 = new Car("Hyundai i10");
i10.drive();

//Here this. refers to current class object