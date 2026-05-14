let v = 15;//global scope
console.log(v);
//defining function
function printHello() {
    console.log("Hello Testers");
    let v = 20;//local scope + redeclaration
    console.log(v);
    if (true) {
        let v = 40;
        console.log(v);//40
    }
    console.log("V-->: ", v);
}

console.log("G-->: ", v);
printHello();