//whether entered year is leap year or not

//Divisible by 4 AND not Divisible by 100 - Leap Year
//OR Divisible by 400 - Leap Year
//Else - Not a Leap year


let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a Leap year")
}
else {
    console.log(year + " is not a Leap year")
}
