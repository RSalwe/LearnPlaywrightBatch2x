// let a = '5' + 2;
// console.log(a);
// console.log(typeof a);
// //if anyone of the operand is string output type will be string

// let b = 5 + '2';
// console.log(b);
// console.log(typeof b);

// let c = '5' + '2';
// console.log(c);
// console.log(typeof c);

// let d = '5' - 2;
// console.log(d);
// console.log(typeof d);

// let e = 2 - '5';
// console.log(e);
// console.log(typeof e);

// let f = '5' - '5';
// console.log(f);
// console.log(typeof f);

// let g = null + undefined;
// console.log(g);
// console.log(typeof g);

// let h = 0 / 0;
// console.log(h);
// console.log(typeof h);

//Below '10' will be converted to int 10
//10-5 = 5
//5 + '2' = 52
let result = '10' - 5 + '2';
console.log(result);//52

//Below greeting is not defined so in this
//case output will always be right hand side
//operand of ??
let greeting;
console.log(greeting ?? 'Hello World');

//Below first 3 ** 2 = 9will be calculated
//then 10 % 9 = 1
let outcome = 10 % 3 ** 2;
console.log(outcome);

//Below true (Boolean) is converted to string = 'true' 
//'Result:'+'true' = Result:true
let output = 'Result: ' + true;
console.log(output);


const check = 50;
function dynamic() {
    const check = 100;
    console.log(check);
}
dynamic();

console.log(typeof true);
console.log(typeof (string));
console.log(typeof (null) == typeof (undefined));

// 18 May - Task 1
let a1 = 50;
let b1 = 20;
let max_Num = a1 > b1 ? "50" : "20";
console.log(`Maximum Number between ${a1} & ${b1} is: ${max_Num}`);

// 18 May - Task 2
let x = 100;
let y = 50;
let z = 300;
let max_Num1 = x > y ? (x > z ? "100" : "300") : (y > z ? "50" : "300");
console.log(`Maximum Number between ${x}, ${y} & ${z} is: ${max_Num1}`);

// 18 May - Task Output
let a = 5;
console.log(a++ + ++a - --a + a-- + ++a);
console.log(a);