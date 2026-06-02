function runTest(name, status, duration) {
    return (`${name}: ${status} (${duration}ms)`)
}
//runTest("Login", "Pass", 420); // This will never be printed until you ask the system to print it
const result = runTest("Login", "Pass", 420);//This is the correct way to print the function
console.log(result);
