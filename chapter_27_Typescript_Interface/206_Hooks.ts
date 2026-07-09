interface TestHook {
    (testName: string): void;//Anonymous function without name
}

let beforeEachHook: TestHook = function (testName: string): void {
    console.log("[Before] Setting Up: " + testName);
};

let afterEachHook: TestHook = function (testName: string): void {
    console.log("[AFTER] Tearing Down: " + testName);
};

beforeEachHook("Login Test");
interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number
}
let test1: TestCase = {
    id: 1,
    name: "Login with Valid Credentials",
    status: "PASS",
    duration: 1500
}

console.log("TC-" + test1.id + ": " + test1.name + " -> " + test1.status);

afterEachHook("Login Test");