//Rest of the param
function logResult(suiteName, ...result) {
    console.log(suiteName);
    console.log(result);
}
logResult("SignUp_Test", "Relogin", 1, 2, 3)
logResult("Failed_Test", "Retest_Test")