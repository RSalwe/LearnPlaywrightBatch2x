let result = ["pass", "fail", "pass", "error", "fail"];
//Index ------- 0--------1-------2-------3-------4----

console.log(result.indexOf("fail")); //1 --> Will always return first fail
console.log(result.indexOf("skip")); //-1 (if not found)

// lastIndexof - searches from the end
console.log(result.lastIndexOf("fail"));//4 --> Will return last element index

//includes - returns boolean
console.log(result.includes("error")); // true
console.log(result.includes("skip")); //false

//find - returns first matching element
let nums = [10, 25, 30, 15];
let r = nums.find(x => x > 15);
console.log(r); //25

//findIndex - returns first matching element
let s = nums.findIndex(n => n > 20);
console.log(s); //1

//findLast - returns first matching element from the last
let t = nums.findLast(n => n > 20);
console.log(t); //30

//findLastIndex - returns first matching element Index from the last
let u = nums.findLastIndex(n => n > 20);
console.log(u); //2






