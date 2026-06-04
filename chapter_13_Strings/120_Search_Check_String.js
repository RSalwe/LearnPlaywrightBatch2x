//Searching and Checking

//includes
let url = "http://sample.org/login/?cow=field&sea=home";
console.log(url.includes("sample"));//true
console.log(url.includes("original"));//false

//startswith / endswith

console.log(url.startsWith("http"));//true
console.log(url.startsWith("https:"));//false
console.log(url.endsWith("home"));//true

//indexOf / lastIndexOf
console.log(url.indexOf("s"));//7 first s
console.log(url.indexOf("z"));//-1 -> as z is not present in url
console.log(url.lastIndexOf("s"));//29 -> search s from last


console.log(url.indexOf("nothere"));//-1 -> doesnt exist
console.log(url.indexOf("x"));//-1

//Search
console.log(url.search(/login/));// *** Regex*** = 18 -> starting index of word login
console.log(url.search(/cow/));//25

// /Regex/ -> Regular Expression -> These are nothing but
// a pattern that you can find within the strings automatically


