class BasePage {
    verify() {
        console.log("Verifying base page");
    }
}
class LoginPage extends BasePage {
    verify() {
        console.log("Verify: Username fields exists");
        console.log("Verify: Password fields exists");
        console.log("Verify: Login button is visible");
    }
}
class Dashaboard extends BasePage {
    verify() {
        console.log("Verify: Welcome message shown");
        console.log("Verify: Sidebar menu loaded");
    }
}
class CartPage extends BasePage {
    verify() {
        console.log("Verify: Cart item displayed");
        console.log("Verify: total price is correct");
    }
}
let pages = [new LoginPage(), new Dashaboard(), new CartPage()];
pages.forEach(function (page) {
    page.verify();
    console.log("------");

});