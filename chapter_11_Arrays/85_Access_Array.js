//Accessing and Modifying
let statuses = ["pass", "fail", "skip"];

console.log(statuses[0]);
console.log(statuses[2]);

//In array we should use at function 
//if we have to go in reverse sequence
console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-3));
console.log(statuses.at(-4));//undefined

//Modify above array
statuses[0] = "fail";
statuses[1] = "pass";
statuses[3] = "unknown";
console.log(statuses); 