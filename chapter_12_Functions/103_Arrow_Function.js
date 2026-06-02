//Arroe Function (ES6)

const greet = function (name) {
    return "Hi " + name;
}

let r = greet("Rupesh");
console.log(r);

const greet2 = (name1) => "Hi " + name1;
let s = greet2("Suresh");
console.log(s);

//If you want to make a normal function to arrow function then,
//remove the keyword function, return, remove curly braces and only use =>

const doubleIt = n => n * 2;
console.log(doubleIt(100));

const printIt = name => console.log(name);
printIt("Rupesh");

function add(a, b) {
    return a + b;
}

//above function can also be written 
//using arrow (=>) function as below
//converting function with param into a arrow function
const add2 = (a, b) => a + b;
const s1 = add2(1, 1);
console.log(s1);


//In above => is nothing but return keyword

function say() {
    console.log("Hi..");
}

//Below is the conversion of function with no param into a arrow function
const say1 = () => console.log("Hi1..");//This is same as say2
say1();

const say2 = () => 'Hi2..';//This is same as say1
say2();

//Writing arrow function with multiple lines
const greet1 = (name) => {
    const message = "Hi " + name;
    return message;
}
const name1 = greet1("Jannie");
console.log(name1);
