//****QUESTION - 1 (HTTP Status Code Categorizer) ****/

let statusCode = 200;
if (statusCode >= 200 && statusCode <= 299) {
    console.log(statusCode + ": Success");
} else if (statusCode >= 300 && statusCode <= 399) {
    console.log(statusCode + ": Redirection");
} else if (statusCode >= 400 && statusCode <= 499) {
    console.log(statusCode + ": Client Error");
} else if (statusCode >= 500 && statusCode <= 599) {
    console.log(statusCode + ": Server Error");
}
else {
    console.log("Invalid");
}

//Site for emoji download --> https://emojipedia.org/check-mark-button
//****QUESTION - 2 ****/
let expected = "Login Successful";
let actual = "Login Successful";
if (expected === actual) {
    console.log("✅ Test Passed");
}

let expected1 = "Login Successful";
let actual1 = "Invalid Credentials"
if (expected1 !== actual1) {
    console.log("❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials");
}
//****QUESTION - 3 (Test Case Pass/Fail Verdict) ****/
let impactScore = 5;
if (impactScore >= 9 && impactScore <= 10) {
    console.log("Severity: Critical — Block release");
} else if (impactScore >= 7 && impactScore <= 8) {
    console.log("Severity: High");
} else if (impactScore >= 4 && impactScore <= 6) {
    console.log("Severity: Medium");
} else if (impactScore >= 1 && impactScore <= 3) {
    console.log("Severity: Low");
}
else {
    console.log("Invalid Score");
}

//****QUESTION - 4 (Build Health Reporter) ****/
let percentage = 65;
if (percentage === 100) {
    console.log("🟢 Green Build");
} else if (percentage >= 90 && percentage <= 99) {
    console.log("🟡 Stable — Investigate failures");
} else if (percentage >= 70 && percentage <= 89) {
    console.log("🟠 Unstable");
} else if (percentage < 70) {
    console.log("🔴 Broken Build — Block deployment");
}


//****QUESTION - 5 ( Login Lockout After Failed Attempts) ****/
let failedAttmpts = 2;
if (failedAttmpts === 2) {
    console.log("1 attempt left before lockout");
} else if (failedAttmpts === 3) {
    console.log("🔒 Account Locked — Contact support");
} else if (failedAttmpts === 0) {
    console.log("Login successful");
}