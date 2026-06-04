let str = " Hello, World! ";

console.log(str.toUpperCase());//HELLO, WORLD! 
console.log(str.toLowerCase());// hello, world!
console.log(str.trim());//trim from start and end
console.log(str.trimStart());//trim from start only
console.log(str.trimEnd());//trim from end only

let msg = "Test: FAIL. Retry: FAIL";
console.log(msg.replace("FAIL", "PASS"));//it will replace first FAIL
console.log(msg.replaceAll("FAIL", "PASS"));//it will replace all FAIL
//Below is the Replace with Regex
console.log(msg.replace(/FAIL/g, "PASS"));

//Concatenation
console.log("Hello" + " " + "World1");
console.log("Hello".concat(" ", "World2"));

let url = "https:app.vwo.com?app=rupesh";
console.log(url.replace(/app/g, "qa"));// This will replace all app word to qa in the url

//Split
let s = "pass,fail,skip".split(",");
console.log(s); //it will print an array with "," separation


//Split and Join
let j = "pass_fail_skip".split("_").join(" ");
console.log(j); //it will print an array with " " separation

let parts = ["2026", "06", "04"];
let date = parts.join("-");
console.log(date);


