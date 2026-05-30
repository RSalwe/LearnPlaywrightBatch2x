//checking Array

//checking whether something is array or not

let num = Array.isArray([1, 2, 3, 4]);// will return true or false
console.log(num);

let num1 = Array.isArray("a");// [] is must
console.log(num1);

//every & some

console.log([50, 60, 70, 80].every(s => s >= 40));//true
console.log([40, 30, 70, 100].every(s => s >= 40));//false

//Playwright API
console.log([200, 202, 204].every(statusCode => statusCode > 200));//false

//Some - At least one must pass
console.log([50, 20, 10, 15].some(s => s < 40));//true
console.log([10, 15, 20, 35].some(s => s > 40));//false

//in between
console.log([10, 15, 20, 25, 30, 35].some(s => (s > 1) && (s < 10)));//false