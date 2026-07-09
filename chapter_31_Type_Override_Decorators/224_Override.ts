class BaseTest {
    setup(): void {
        console.log("[BASE] Open Browser");
    }
    teardown(): void {
        console.log("[BASE] Close Browser");
    }
}
class LoginTest extends BaseTest {
    override setup(): void {
        console.log("[Login Test] Open Browser");
        console.log("[Login Test] Maximise Browser");
    }
}
class APITest extends BaseTest {
    override setup(): void {
        console.log("[API Test] No Browser");
    }
}
let final_test = new LoginTest();
let base_test = new BaseTest();
let api_test = new APITest();
final_test.setup();
base_test.setup();
base_test.teardown();
api_test.setup();