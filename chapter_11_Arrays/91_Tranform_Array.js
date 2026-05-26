let scores = [45, 82, 91, 60, 73];

//map - transform every element, return a new arrays
//A map will always return the same number of elements that you have,
//but based on the condition, their values will be changed 
let grades = scores.map(i => i > 70 ? "Pass" : "Fail");
console.log(grades);

// filter - will keep only elements that pass the test
let passing = scores.filter(s => s > 70);
console.log(passing);

//reduce - accumulates to a single value
let total = scores.reduce((a, b) => a + b, 0);
console.log(total);

//flat - flattens nested array
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());