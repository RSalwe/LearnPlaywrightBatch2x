let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "skip", 180],
];

for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j]);
    }
    console.log();

}

//Alternate way to print
for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ");
    }
    console.log();

}


//forEach- Generally we dont use it
testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log();
})