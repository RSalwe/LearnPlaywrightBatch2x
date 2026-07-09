abstract class BaseTest {
    protected testName: string;
    constructor(testName: string) {
        this.testName = testName;
    }
    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
}
class UITest extends BaseTest {
    setup(): void {
        console.log("Set up: Launch Browser");
    }
    execute(): void {
        console.log("Execute: Press button, Fill forms");
    }
    teardown(): void {
        console.log("Tear Down: Close Browser");
    }
}