console.log("Test 1: started");

//Below is the perfect example of Async Callback function where the anonymus function will
//take the iem 1 by 1, it will take index 1 by 1, it will take result 1 by 1 and
//print the value 1 by 1
setTimeout(function () {
    console.log("Test 2: API response received");
}, 2000);

console.log("Test 3: moving to next test");