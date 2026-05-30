//slicing and combining
let arr = [1, 2, 3, 4, 5];
//Index----0--1--2--3--4--
//slice (start, end) - returns new array, does NOT mutate actual -> (start, end-1)
//Dont give the end, it will automatically take from start to end

console.log(arr.slice(1, 3)); //Here at 1 index 2 is there and 3-1 = at 2 index 3 is there
// Hence [2, 3] will be printed -----> (start, end-1)

console.log(arr.slice(2, 4));//[3, 4]

console.log(arr.slice(2, 5));//[3, 4, 5]

console.log(arr.slice(2));//[3, 4, 5]

console.log(arr.slice(-2));//[4, 5]

console.log(arr.slice(0));//[1, 2, 3, 4, 5]