let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB Ok");
let checkCache = Promise.resolve("Cache Ok");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All the checks are fine");
});

//Another way
Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
]).then(function (result) {
    console.log(result);
}).catch(function (error) {
    console.log("Failed: ", error);
})

//Third Way
Promise.allSettled([
    Promise.resolve("Test A Passed"),
    Promise.reject("Test B Failed"),
    Promise.resolve("Test C Passed")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    });
})

//This is like a test report - you want results for all tests, not just stop at the first failure