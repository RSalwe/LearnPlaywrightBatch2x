//If the function is async and is returning something then it become a promise function
//Question - 1 ***** function without await *****
async function sayHello() {
    return "Hi, QA";
}
sayHello().then(function (msg) {
    console.log(msg);
});

//Question - 2
async function getStatus() {
    let status = await Promise.resolve(200);
    console.log("Status Code: ", status);
}
getStatus(); //Calling function

//Question - 3
async function testFlow() {
    let step1 = await Promise.resolve("Opened browser");
    console.log(step1);

    let step2 = await Promise.resolve('Clicked Login');
    console.log(step2);

    let step3 = await Promise.resolve("Verified Account");
    console.log(step3);
};

testFlow();