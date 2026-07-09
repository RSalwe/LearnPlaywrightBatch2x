interface BasePage {
    url: string;
    title: string
}
interface LoginPage extends BasePage {
    usernameselector: string;
    passwordselector: string;
    loginbuttonselector: string
}
interface FreeTriaPage extends BasePage {
    usernameselector: string;
    submitbuttonselector: string
}
let loginPage: LoginPage = {
    url: "/login",
    title: "Login Page",
    usernameselector: "#username",
    passwordselector: "#password",
    loginbuttonselector: "#login-btn"
}
let freeTriaPage: FreeTriaPage = {
    url: "/login",
    title: "Login Page",
    usernameselector: "#username",
    submitbuttonselector: "#submit"
}

console.log("URL: ", loginPage.url);
console.log("Title: ", loginPage.title);
console.log("Username field: ", loginPage.usernameselector);

console.log("---------");

console.log("URL: ", freeTriaPage.url);
console.log("Title: ", freeTriaPage.title);
console.log("Username field: ", freeTriaPage.usernameselector);






