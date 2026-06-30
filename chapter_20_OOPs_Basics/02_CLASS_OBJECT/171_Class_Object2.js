class Person {
    constructor() {
        console.log("I will be called when an Obj is created");
    }

    //Attributes
    name;
    email;
    salary;
    address;

    //Behaviour
    sleep() { }
    eat() { }
    function() { }
}

const obj_ref = new Person();
//obj_ref = Is called the object reference (address)
//new Person(); -> Is the object with the new keyword

console.log(obj_ref);
