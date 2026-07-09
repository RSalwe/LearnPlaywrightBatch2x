//Creating an interface with variable and function(s)
interface Executable {
    name: string;
    run(): void;
    getStatus(): string
}
//Here class is using Executable (interface) properties
class TestCase implements Executable {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    run(): void {
        console.log("[RUN]: ", this.name);
    }
    getStatus(): string {
        return "PASS";
    }
}
//Below we are creating the object using interface
let tc: Executable = new TestCase("Verify Login Redirect");//: Executable is optional to write
tc.run();