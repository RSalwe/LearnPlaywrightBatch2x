class BaseTest {
    setup() {
        console.log("Base: Open Browser");
    }
    teardown() {
        console.log("Base: Close Browser");
    }
}
class UITest extends BaseTest {
    setup() {
        super.setup();
        console.log("UI: Maximize window");
    }
    teardown() {
        console.log("UI: take screenshot");
        super.teardown();
    }
}
let test = new UITest();
test.setup();