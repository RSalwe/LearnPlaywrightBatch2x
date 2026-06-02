// let a = '5' + 2;
// console.log(a);//52
// console.log(typeof a);//String
// if anyone of the operand is string output type will be string

// let b = 5 + '2';
// console.log(b);//52
// console.log(typeof b);//String

// let c = '5' + '2';
// console.log(c);//52
// console.log(typeof c);//String

// let d = '5' - 2;
// console.log(d);//3
// console.log(typeof d);//number

// let e = 2 - '5';
// console.log(e);//-3
// console.log(typeof e);//number

// let f = '5' - '5';
// console.log(f);//0
// console.log(typeof f);//number

// let g = null + undefined;
// console.log(g);//NaN
// console.log(typeof g);//number

// let h = 0 / 0;
// console.log(h);
// console.log(typeof h);

//Below '10' will be converted to int 10
//10-5 = 5
//5 + '2' = 52
// let result = '10' - 5 + '2';
// console.log(result);//52

//Below greeting is not defined so in this
//case output will always be right hand side
//operand of ??
// let greeting;
// console.log(greeting ?? 'Hello World');

//Below first 3 ** 2 = 9will be calculated
//then 10 % 9 = 1
// let outcome = 10 % 3 ** 2;
// console.log(outcome);

//Below true (Boolean) is converted to string = 'true'
//'Result:'+'true' = Result:true
// let output = 'Result: ' + true;
// console.log(output);


// const check = 50;
// function dynamic() {
//     const check = 100;
//     console.log(check);
// }
// dynamic();

// console.log(typeof true);
// console.log(typeof (string));
// console.log(typeof (null) == typeof (undefined));

// // 18 May - Task 1
// let a1 = 50;
// let b1 = 20;
// let max_Num = a1 > b1 ? "50" : "20";
// console.log(`Maximum Number between ${a1} & ${b1} is: ${max_Num}`);

// // 18 May - Task 2
// let x = 100;
// let y = 50;
// let z = 300;
// let max_Num1 = x > y ? (x > z ? "100" : "300") : (y > z ? "50" : "300");
// console.log(`Maximum Number between ${x}, ${y} & ${z} is: ${max_Num1}`);

// // 18 May - Task Output
// let a = 5;
// console.log(a++ + ++a - --a + a-- + ++a);
// console.log(a);

// console.log(0.1 + 0.2 === 0.3);//false

// type = typeof 1;
// console.log(type);//number
// console.log(typeof typeof 1);//string

// console.log(3 > 2 > 1);

// let x1 = 10;
// x1 &= 3;
// console.log(x1);

// console.log(x ??= 10);

// greet();
// function greet() {
//     console.log("Hi");
// }

// sayHi();
// const sayHi = function () {
//     console.log("Hi");
// }

// {
//     console.log(testName);
//     let testName = "Login Test";
// }

// let sideA = 20; sideB = 20; sideC = 20;
// if (sideA === sideB && sideB === sideC && sideC === sideA) {
//     console.log("This is an equilateral triangle");
// } else if (sideA === sideB || sideB === sideC || sideC === sideA) {
//     console.log("This is an isosceles triangle");
// } else {
//     console.log("This is an scalene triangle");
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else {
//         console.log(i);
//     }
// }

// let name = Array.from("123456789");
// console.log(name);

// function addLog(a, b) {
//     console.log(a + b);
// }

// function addReturn(a, b) {
//     return a + b;
// }

// let x = addLog(2, 3);
// let y = addReturn(2, 3);

// console.log(x * 10);
// console.log(y * 10);

//below is Type 1 function as it has
//NO param and NO return
// function greet() {
//     console.log("This is Type 1 function");
// }
// greet();


//below is Type 2 function as it has
//param but not return value and hence
//it is printing undefined value
// function greetByName(name) {
//     console.log("Hello", name)
// }

// console.log(greetByName("Rupesh"));
// console.log(greetByName("Gunjan"));

//Type 2 function is like begger it never return anything
// function begger(money) {
//     console.log("Thank you for", money, "Rupees");
// }
// let noReturnJustThanks = begger(500);
// console.log(noReturnJustThanks);

//Below is Type 3 function where there is no param but has return keyword
//This is like the relative whenever we go to their house we get money in return

// function relativeMoney() {
//     console.log("Thanks")
//     return "Thank you Uncle";
// }

// let relative = relativeMoney();
// console.log(relative);

//below is Type 4 function (mostly used) where there is param and return keyeord as well
// function addTwoNumbers(a, b) {
//     return a + b;
// }
// let sum = addTwoNumbers(10, 20);
// console.log(sum);

//Below is also an Type 4 function
// function greet(name) {
//     return `Hello ${name}`;
// }



// //we can store the function into a variable
// //and we can call the function using that variable
// //BELOW IS ALSO CALLED FUNCTION AS EXPRESSION
// const greet1 = function (name) {
//     return `Hello ${name}`;
// }
// console.log(greet("Gunjan"));
// console.log(greet1("Rupesh"));

//Below is normal type 4 function
// const greet = function (name) {
//     return "Hello " + name;
// }
// console.log(greet("Rupesh"));


// //conversion of type 4 function to arrow
// //function is simply remove function keyword
// //remove curly braces and remove return keyword
// //and use only =>
// //Below is arrow function
// const greet1 = (name) => "Hello " + name;

// console.log(greet1("Gunjan"));

// Another example of arrow function

// const doubleIt = n => n * 2;
// console.log(doubleIt(100));

const printIt = name => console.log("Hey " + name);
printIt("Rupesh");

