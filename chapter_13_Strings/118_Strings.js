//single line string
let a = 'rupesh';

//double line string
let b = "gunjan"

//Example
let name = 'Alice';

let message = ` Hi ${name}! 2 + 2 = ${2 + 2} `
console.log(message);

//Multiline String
let report = `
Test: Login
Status: Pass
Duration: 320ms
`;

//String as below is an interface which converts anything into string
console.log(String(200));//200 - as it will consider it as string
console.log(String(true));//true - as it will consider it as string
console.log(String([1, 2]));//1, 2 - as it will consider it as string though it is an array

//To give the output as Array we need to use JSON.stringify function
console.log(JSON.stringify([1, 2]));//[1, 2]

