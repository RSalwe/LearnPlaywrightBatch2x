//Below is defining promise function
let apiCall = new Promise(function (resolve, reject) {
    reject("500 - Error");
})
//Below is callig a function
apiCall.then(function (data) {
    console.log("Success or Resolved");
}).catch(function (error) {
    console.log(error);
})
//As the Promise function has only defined reject hence .catch will be displayed and not .then
//Syntax - function_Name.then().catch()

//.catch() ONLY runs when promise is rejected
//.then() will be completely skipped to above scenario