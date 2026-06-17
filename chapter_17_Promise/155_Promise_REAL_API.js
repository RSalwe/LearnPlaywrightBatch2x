let apiCall = new Promise(function (resolve, reject) {

    resolve({
        status: 200, body: "User Data"
    });
});

apiCall.then(function (response) {
    console.log(response);

})



//.then() runs only when the promise resolves successfully