//Grand Father -> Father -> Son
//BasePage -> AuthPage -> AdminPage

class BasePage {
    constructor(name) {
        this.mame = name;
    }
    open() {
        console.log("[OPEN] " + this.name);
    }
}
class AuthPage extends BasePage {
    login(user) {
        console.log("[LOGIN] " + user);
    }
}
class AdminPage extends AuthPage {
    constructor() {
        super("Admin Panel");
    }
    manageUsers() {
        console.log("[ADMIN] managing users");

    }
}
let admin = new AdminPage();
admin.open();
admin.login("superadmin");
admin.manageUsers();