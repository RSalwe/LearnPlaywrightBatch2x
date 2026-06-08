let config = {};

config.browser = "Safari";
config.timeout = 2000;
config.testCase = "Login_Test";

console.log(config);

delete config.browser;

console.log(config);

if (config.browser === "Safari") {
    console.log("I will execute the Test Cases");
}

//We can also use simple below process to define object

let config2 = {
    browser = "Safari",
    timeout = 2000,
    testCase = "Login_Test"
};