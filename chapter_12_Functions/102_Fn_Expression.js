const greet = function (name) {
    return `Hello, ${name}`;
}
let r = greet("Rupesh");
console.log(r);

//Below is Type 4 normal Function
function greet1(name1) {
    return `Hello, ${name1}`;
}
//Below is Function as Expression but both are same 
function greet2(name2) {
    return `Hello, ${name2}`;
}
console.log(greet1("Suresh"));
console.log(greet2("Mukesh"));