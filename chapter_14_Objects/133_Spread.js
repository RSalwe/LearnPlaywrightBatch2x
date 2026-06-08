const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const copy = { ...obj1 };
console.log(copy);

// Reason why we use const during object is:
// Because in const only values can be changed and
// not its reference


//We always use const in case of object
let config1 = { browser: "Chrome", timeout: 3000 };
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retry = 2;
console.log(config1);

config1 = { browser: "Safari" };
console.log(config1);

//***************************************** */

const config2 = { browser: "Chrome", timeout: 3000 };
config2.browser = "Firefox";
config2.timeout = 5000;
config2.retry = 2;
console.log(config2);

//config2 = { browser: "Safari" };
console.log(config2);