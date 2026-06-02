//Below is closure function which is very rarely
//used in automation
function outer() {
    let message = "hello";
    console.log("Outer CALLED");
    function inner() {
        console.log(message);
    }
    return inner;
}

let fn_inner = outer();
fn_inner();
//inner function can be called by outer
//function by assigning them is called closure
