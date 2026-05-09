var $ = 10;
var _r = 20;
var g = 30;

var abc123 = 40;

//var 123 = 123; (Not Possible)

var Name = "Rupesh";
var name = "Gunjan";

//var rupesh salwe = "Hi"; (Not Possible due to space after rupesh)

var rupeshsalwe = "Hi";
var rupesh$salwe ="Hi";
var rupeshsal123 = "Hi";

// 1. Must begin with letter, _, or $
var name = "valid";
var _private = "valid";
var $price = "valid";

// 2. Cannot begin with a digit (uncommenting causes SyntaxError)
// var 1stPlace = "invalid";

// 3. Can contain letters, digits, _, $ after first character
var firstPlace1 = "valid";
var user_name = "valid";
var price$tag = "valid";

// 4. Cannot contain spaces or special characters like - or . (uncommenting causes SyntaxError)
// var my name = "invalid";
// var my-name = "invalid";
// var my.name = "invalid";

// 5. Case-sensitive
var myName = 1;
var myname = 2; // different variable

// 6. Cannot be a reserved keyword (uncommenting causes SyntaxError)
// var var = "invalid";
// var class = "invalid";
// var let = "invalid";

// 7. Can contain Unicode letters and escape sequences
var 你好 = "valid";
var \u0041 = "valid"; // \u0041 is "A"

// 8. No length limit (keep readable)
var thisIsAVeryLongVariableNameThatIsStillCompletelyValidInJavaScript = "valid";

// 9. Should not conflict with built-in/global names (valid but bad practice)
var Array = "shadows built-in";
var undefined = "risky";