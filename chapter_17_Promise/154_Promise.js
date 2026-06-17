//Below Promise is a function 
let order = new Promise(function (resolve, reject) {
    let foodReady = true;
    if (foodReady) {
        resolve("Food is packed, order is on the way");
    }
    else {
        reject("Your order has been cancelled due to heavy rain");
    }
})
//As above foodReady is true only if condition will be displayed
console.log(order);
