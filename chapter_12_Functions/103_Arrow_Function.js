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