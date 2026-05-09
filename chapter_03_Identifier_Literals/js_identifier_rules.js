// 1. Must begin with letter, _, or $
let name = "valid";
let _private = "valid";
let $price = "valid";
// 2. Cannot begin with a digit (invalid)
// let 1stPlace = "invalid"; // SyntaxError
// 3. Can contain letters, digits, _, $ after first character
let firstPlace1 = "valid";
let user_name = "valid";
let price$tag = "valid";
// 4. Cannot contain spaces or special characters like - or .
// let my name = "invalid";
// let my-name = "invalid";
// let my.name = "invalid";
// 5. Case-sensitive
let myName = 1;
let myname = 2; // different variable
// 6. Cannot be a reserved keyword
// let let = 1; // SyntaxError
// let class = 1; // SyntaxError
// 7. Can contain Unicode letters and escape sequences
let 你好 = "valid";
let \u0041 = "valid"; // \u0041 is "A"
// 8. No length limit (keep readable)
let thisIsAVeryLongVariableNameThatIsStillCompletelyValidInJavaScript = "valid";
// 9. Should not conflict with built-in/global names (valid but bad practice)
let Array = "shadows built-in";
let undefined = "risky";