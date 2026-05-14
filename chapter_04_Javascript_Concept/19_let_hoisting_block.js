let x = "global";

if (true) {
    //TDZ block for x starts here
    //console.log(x);//ReferenceError

    let x = "block";
    console.log(x);
}

console.log(x);