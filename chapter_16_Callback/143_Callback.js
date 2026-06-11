function print() {
    console.log("This is a normal function");
}

function placeOrder(orderItem, callback) {
    console.log("Hi.. your order is placed");
    callback();
}

//First way to call callback function
placeOrder("Burger", print)// We can pass function as an argument i.e. print

//Second way to call callback function
placeOrder("Pizza", function () {
    console.log("Anonimous function");
});

//Third way to use arrow function
placeOrder("Momos", () => {
    console.log("Arrow function");
});