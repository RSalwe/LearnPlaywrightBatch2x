var v = 50;//This is global scope

//Var is a function scoped
console.log(v);

function moto() {
    console.log("Hello, My Friend");
    var v = 100;////This is local scope
    console.log(v);

    if (true) {
        var v = 150;
        console.log(v);
    }
}

moto();

var v = 200;