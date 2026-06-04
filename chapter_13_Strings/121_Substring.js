let str = "Login_Test_Pass_001";
//slice (start, end) - negative indexes supported

console.log(str.slice(0, 11));//Login_Test actual (0, 11-1=10) => (0, 10)
console.log(str.slice(11));//Pass_001
let test_Number = str.slice(-3);
console.log(test_Number);//001

console.log(str.includes("Pass"));

//Substring (start, end) - no negatives (treats as 0)

console.log(str.substring(6, 10));//Test
console.log(str.substring(-1));//Login_Test_Pass_001

//In substring it always consider -1 as 0 and hence
//it will start printing from index 0

console.log(str.at(0));//L
