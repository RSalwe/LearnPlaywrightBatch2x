function openBrowser() {
    return new Promise(function (resolve) {
        //Code to open the browser
        resolve("open the browser");
    })
}

// function openBrowser(callback) {
//    setTimeout(function () {
//    console.log("Step 1: Chrome Browser Opened");
//         callback();
//     }, 500);
// }

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login Page Loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials Entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in Successfully");
    });
}

openBrowser()
    .then(function (msg) {
        console.log("Step: 1-", msg);
        return goToLogin();
    }).then(function (msg) {
        console.log("Step: 2-", msg);
        return enterCredentials();
    }).then(function (msg) {
        console.log("Step: 3-", msg);
        return clickLogin();
    }).then(function (msg) {
        console.log("Step: 4-", msg);
    }).catch(function (error) {
        console.log("Error: ", error);
    }).finally(function () {
        console.log("Done Execution");
    });