let a = 10;

let retryCount = 0;
retryCount = retryCount + 1; // This is reassignment (allowed)

console.log("retryCount is:", retryCount);

//let retryCount = 1;//// This is redeclare (not allowed)
// Above one will show Syntax error

// Below is an example of Block Scoped

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1000;
    console.log("executionTime: ", executionTime)
}

console.log(executionTime);//ReferenceError