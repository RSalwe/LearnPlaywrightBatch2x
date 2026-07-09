function logged(originalMethod: any, context: any): any {
    return function (this: any, ...args: any[]): any {
        console.log("Called Decorator");
        return originalMethod.Call(this, ...args);
    };
}
class Greeter {
    @logged
    hello() {
        return "Hi";
    }
}

let r = new Greeter().hello();
console.log(r);

