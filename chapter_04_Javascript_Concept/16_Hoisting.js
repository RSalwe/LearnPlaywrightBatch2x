console.log(message);
var message = "Hello";
console.log(message);

// below is done by JS complier as it assume that you will use this later
// console.log(message);  -->undefined
// var message = "Hello";  --> assignment stays in place
// console.log(message);  --> "Hello"

//var r;
console.log(r);//The value of r will always be undefined because type of r is var hence hoisting is valid in var only
var r = "Rupesh";
console.log(r);