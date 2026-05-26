//Iterate - Go from one to another

let result = ["checkin", "checkout", "search"];

for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}

console.log("---------");

//for....of (cleanest for values)

for (demo of result) {
    console.log(demo);
}

console.log("---------");

//forEach

result.forEach((demo1, index) => {
    console.log(demo1, index);
});

console.log("---------");

let students = ["methis", "senthil", "rupesh", "sashi"];
for (let demo2 in students) {
    console.log(demo2, " -> ", students[demo2]); //index = in
}
