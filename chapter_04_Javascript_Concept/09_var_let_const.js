var v = 50;
let l = 100;
const c = 3.33;

var browser = "explorer";//This is declaration
var browser = "safari";//This is redeclaration (allowed)
browser = "chrome";//This is reassignment (allowed)

//for, functions

var testCases = ["login", "logout", "signout"];

for (i = 0; i < testCases.length; i++) {
    console.log("Running Test:", testCases[i]);
}
//Below is called var leaking in for loop
console.log("Loop counter leaked outside:", i);

console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
//function is a code which is reusable in nature
function say() {
    console.log("Hello from function");
}

say();