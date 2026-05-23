//Task 1 - Triangle Classifier:
let sideA = 20; sideB = 20; sideC = 20;
if (sideA === sideB && sideB === sideC && sideC === sideA) {
    console.log("This is an equilateral triangle");
} else if (sideA === sideB || sideB === sideC || sideC === sideA) {
    console.log("This is an isosceles triangle");
} else {
    console.log("This is an scalene triangle");
}

//Task 2 - FizzBuzz Test:
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}