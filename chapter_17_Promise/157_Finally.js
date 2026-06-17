let testRun = new Promise(function (resolve, reject) {
    let test = true;
    if (test) {
        resolve("Assertion Passed");
    } else {
        reject("Assertion Failed");
    }
});

testRun.then(function (pass) {
    console.log("Test Run successfully");
}).catch(function (fail) {
    console.log(fail);
}).finally(function () {
    console.log("I will be executed AnyHow");
});