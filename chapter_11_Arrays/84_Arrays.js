//Creating Arrays //Array literal (preferred)
let browsers = ["Chrome", "Safari", "Firefox"];

//Array Contructor

let scores = new Array(3);// Here 3 is length
scores[0] = 1;
scores[1] = 1;
scores[2] = 1;
let scores1 = new Array(1, 2, 3);
console.log(scores);
console.log(scores1);

let numbers = new Array(100, 200, 300, 400);//0-3, 4
console.log(numbers);

//Array.of()
let test = Array.of(10, 20, 30, 40);
console.log(test);

//Array.from()
let char = Array.from("hello");
console.log(char);

// let int = Array.from("123456789");
// console.log(int);