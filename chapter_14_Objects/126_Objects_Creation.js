let c = { status: "Pass" };
let d = { status: "Pass" };
console.log(c);
console.log(d);
//In above though values are same but there references are different

if (c === d) {
    console.log("true");
} else {
    console.log("false");
}

//As we are not equaling c and d like let c = d it will be always
//considered as different