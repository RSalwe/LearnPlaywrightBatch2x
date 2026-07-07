class BasePage {
    constructor(pageName) {
        this.pageName = pageName;
    }
    open() {
        console.log("Openning the page");
    }
    close() {
        console.log("Closing the page");
    }
}
class LoginPage extends BasePage {

}
const page = new LoginPage();//creating the object of child class i.e. LoginPage
page.open();
page.close();
