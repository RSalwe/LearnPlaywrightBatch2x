//app.vwo.com --> viewer. editor and admin

let isLoggedIn = true;
let userRole = "viewer"

if (isLoggedIn) {
    if (userRole === "viewer") {
        console.log("Hello!! Ypu have view access only!!");
    }
    else if (userRole === "editor") {
        console.log("Hello!! You have edit access");
    }
    else if (userRole === "admin") {
        console.log("Hello!! You have all admin access");
    }
    else {
        console.log("You do not have valid User Role");
    }
}
else {
    console.log("You are not logged in!!")
}