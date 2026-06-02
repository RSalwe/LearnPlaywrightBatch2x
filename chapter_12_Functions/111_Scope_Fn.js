//Scope in Functions

let env = "Staging"; //global scope

function setupConfig() {
    let timeout = 3000;//local scope
    console.log(env); // can access global
    console.log(timeout); //can access local
}

setupConfig();
console.log(env);
console.log(timeout); // as variable timeout is within block as let which is block scope and hence ca not be access outside of block 
// which will definitely give an reference error