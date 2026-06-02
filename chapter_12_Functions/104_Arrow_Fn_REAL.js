//Below is normal function
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log(status + " :Request is valid...");

    }
}
validateStatusCode(200);

//Above function can also be written as fn as expression function

const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log(status + " :Request is valid...");

    }
}
validateStatusCode_Exp(250);

// We can also write the same as an arrow function

const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log(status + " :Request is valid...");
    }
    else {
        console.log(status + " :Request is Not valid...");

    }
}
validateStatusCode_Arrow(300);
validateStatusCode_Arrow(301);