var v = 15;//global scope
console.log(v);
//defining function
function printHello() {
    console.log("Hello Testers");
    var v = 20;//local scope
    console.log(v);
    if (true) {
        var v = 40;
        console.log(v);//40
    }
    console.log("V-->: ", v);
}

console.log("G-->: ", v);
printHello();