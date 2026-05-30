let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);//sorting based on their first character

let numbers = [3, 5, 2, 1, 4];
numbers.sort();
console.log(numbers);

let nums = [1, 10, 21, 2];
nums.sort();
console.log(nums);//This is natural (Lexicographic) sorting
nums.sort((a, b) => a - b);
console.log(nums);// Ascending Order
nums.sort((a, b) => b - a);
console.log(nums);// Descending Order