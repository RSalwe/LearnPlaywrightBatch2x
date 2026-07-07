// Exercise 4: Method Chaining with this
class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        return this;//Here this is current object
    }

    display() {
        console.log("Count:", this.count);
        return this;
    }
}
new Counter().increment().increment().increment().display();//This is method chaning