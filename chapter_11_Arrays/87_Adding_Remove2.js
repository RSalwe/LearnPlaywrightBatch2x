let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);
//arr = [1, 2, 3, 4, 5, 6]
//index = 0, 1, 2, 3, 4, 5

// // splice (start, deleteCount,...itemToAdd)
// arr.splice(2, 1);//Here at 2nd index 1 number will be deleted
// console.log(arr);// [1, 2, 4, 5, 6]

arr.splice(2, 0, 99);//Here at 2nd index element 99 will be added
console.log(arr);// [1, 2, 99, 3, 4, 5, 6]

arr.splice(2, 1, 99);//Here at 2nd index element 99 will be replaced with 99
console.log(arr);// [1, 2, 99, 3, 4, 5, 6]

arr.splice(1, 2, 10, 20);//Here at 1st index onwards 2 elements will be deleted and added with 10 and 20
console.log(arr);//[1, 10, 20, 3, 4, 5, 6]
