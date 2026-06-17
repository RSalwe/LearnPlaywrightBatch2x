//Question - 1
// let p = new Promise(function (resolve, reject) {
//     resolve(42);
// });
// p.then(function (value) {
//     console.log("Answer: ", value);
// });

//Question - 2
// let p1 = new Promise(function (resolve, reject) {
//     reject("Something Broke");
// });
// p1.catch(function (error) {
//     console.log("Caught: ", error);
// });

//Question - 3
// let p2 = Promise.resolve(5);

// p2.then(function (val) {
//     return val * 10;
// }).then(function (val) {
//     console.log("Result: ", val);
// });

//Question - 4
// Promise.resolve(1)
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//     })
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//     })
//     .then(function (val) {
//         console.log(val);
//     });

//Question - 5
// Promise.resolve("Start")
//     .then(function (val) {
//         console.log(val);
//         throw new Error("Broke at step 2");//As this is rejected .catch will run
//     })
//     .then(function () {
//         console.log("This will NOT run");
//     })
//     .catch(function (error) {
//         console.log("Caught: ", error.message);
//     });

//Question - 6
// Promise.reject("Test Failed")
//     .then(function (data) {
//         console.log("Data: ", data);
//     })
//     .catch(function (error) {
//         console.log("Error: ", error);
//     })
//     .finally(function () {
//         console.log("Cleanup done");
//     });

//Question - 7
// Promise.resolve("Quick Win").then(function (msg) {
//     console.log(msg);
// });

// Promise.reject("Quick Loss").catch(function (msg) {
//     console.log(msg);
// });

//Question - 8
// let t1 = Promise.resolve("Login: PASS");
// let t2 = Promise.resolve("Search: PASS");
// let t3 = Promise.resolve("Logout: PASS");

// Promise.all([t1, t2, t3]).then(function (result) {
//     console.log(result);
// });

//Question - 9
// let t1 = Promise.resolve("PASS");
// let t2 = Promise.reject("FAIL");
// let t3 = Promise.resolve("PASS");

//In above t2 is rejected and hence catch will be called
// Promise.all([t1, t2, t3])
//     .then(function (r) { console.log("All:", r); })
//     .catch(function (err) { console.log("Stopped:", err); });

//Question - 10
Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function (results) {
    results.forEach(function (r) {
        console.log(r);
    });
});