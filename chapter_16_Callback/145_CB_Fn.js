function cafe(item, callWhenTableisReady) {
    console.log("Finding Table1....");
    console.log("Finding Table2....");
    console.log("Finding Table3....");
    console.log(item);
    callWhenTableisReady();
}

function callWhenTableisReady() {
    console.log("Calling 9876543211");

}

//First way to call 
cafe("Pizza", callWhenTableisReady);

//Second way to call
cafe("Burger", function () {
    console.log("Hi, Your table is ready");

});

//Third way to call
cafe("Momos", () => {
    console.log("Hi, Your table is waiting for you.");

})