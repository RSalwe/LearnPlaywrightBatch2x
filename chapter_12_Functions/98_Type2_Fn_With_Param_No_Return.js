function greetByName(name) {
    console.log("Hello", name)
}

greetByName("Rupesh");
greetByName("Shravya");
let data = greetByName("Gunjan");
console.log(data);

function begger(money) {
    console.log("Thank you for", money, "Rupees");
}

let returnMeSomething = begger(100);
console.log(returnMeSomething);