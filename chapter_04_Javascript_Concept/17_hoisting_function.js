
//As JS supports hoisting we can call function before defining
getUserStatus();

function getUserStatus() {
    // var status_code; (Created at the backend) done by JS engine
    console.log(status_code);
    var status_code = "Ended";
    console.log(status_code);
}

