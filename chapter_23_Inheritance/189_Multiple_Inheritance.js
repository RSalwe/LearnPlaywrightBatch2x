class F1 {
    money() {
        console.log("1 CR");
    }
}
class F2 {
    money() {
        console.log("1 CR");
    }
}
class Son extends F1, F2 {//This is not allowed and will give SyntaxError
    money() {
        console.log("2 CR");
    }
}
let child = new Son();
child.money();