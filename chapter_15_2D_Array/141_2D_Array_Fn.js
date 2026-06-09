let scores = [
    [10, 20, 30],
    [15, 25, 35],
    [25, 50, 75]
];

let rowSum = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowSum);

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

//Want all the test cases which have been failed
for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);

        }
    }
}