let a = [1, 2];
let b = [3, 4];
//console.log(a + b);// this is not the correct way to join array as it will consider as string
let c = a.concat(b);
console.log(c);

//spread (modern way) - concetenation. (...)
let d = [...a, ...b];
console.log(d);

//Join
let j = ["rupesh", "gunjan", "shravya"].join(" | ");
console.log(j);

