// Returns a value
// function getStatus(status) {
//     if (status >= 200 && status < 300) return "Success";
//     if (status >= 400 && status < 500) return "Client error";
//     if (status >= 500) return "server error";
// }

// console.log(getStatus(200));//Success
// console.log(getStatus(400));//Client error
// console.log(getStatus(500));//server error

//*************************************************** */
// function loginTest(name) {
//     console.log(`Running: ${name}`);
// }
// const r = loginTest("Login");//this line will be printed
// console.log(r);//as function do not have return it will print undefined as well 


// for below function we will not get reference error (TDZ) as it is a normal function
//below nothing will be printed
// greet("Alice");

// function greet(name) {
//     return `Hello, ${name}`;
// }
//************************* */

//For below we will get refenrece error as the variable is const
sayHi("Bob");

const sayHi = function (name) {
    return `Hello, ${name}`;
}
