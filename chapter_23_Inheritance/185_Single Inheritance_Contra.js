class BaseTest {
    setup() {
        console.log("Base: Open Browser");
    }
}
class APITest extends BaseTest {
    setup() {
        console.log("APITest: Open Browser");
    }
}
let test = new APITest();//whoever object is present, it will be called
test.setup();

let test1 = new BaseTest();
test1.setup();