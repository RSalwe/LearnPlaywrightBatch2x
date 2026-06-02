//Higher-Order Functions
//A function that takes a function as argument or returns a function.

function runWithLogin(testFn, testName) {
    let result = testFn();
    return result;
}

function loginTest() {
    return "Pass";
}

function loginTestFailed() {
    return "Fail"
}

console.log(runWithLogin(loginTest, "Login Test"));
console.log(runWithLogin(loginTestFailed, "Login Failed Test"));