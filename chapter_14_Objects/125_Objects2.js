//Objects are nothing but a key - value pair

let student1 = { name: "Ramesh" };
let student2 = { name: "Suresh", age: 35 };
let student3 = { name: "Suresh", age: 35, phone: 992219 };

//JS object should never have key in double quotes else it will be JSON
//Hence never write key in double quote "" in JS object

let JSON_student4 = { "name": "Suresh", "age": 35, "phone": 992219 };

let a = { status: "Pass" };
console.log(a.status);
console.log(a["status"]);

let a1 = { status: 'Pass' };
console.log(a1.status);

let b = a;//This is copy by reference
a.status = "Fail"; //Here both a and b will become Fail
console.log(a.status);
console.log(b.status);

if (b === a) { // Using b = a in line no 19 we will get output as true
    console.log("true");
} else {
    console.log("false");
}




