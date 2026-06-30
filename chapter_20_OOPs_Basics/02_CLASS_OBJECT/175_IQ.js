class Browser {
    //Param constructor (arguments)
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched");
    }
    startBrowser() {
        console.log(`Starting the ${this.name} Browser`);
    }
    closeBrowser() {
        console.log(`Closing the ${this.name} Browser`);
    }
}
let chrome = new Browser("Chrome");
//opening and closing Chrome Browser
chrome.startBrowser();
chrome.closeBrowser();
let firefox = new Browser("Firefox");
//opening and closing Firefox Browser
firefox.startBrowser();
firefox.closeBrowser();

console.log("Chrome Opened: ", chrome.isOpen);
console.log("Firefox Opened: ", firefox.isOpen);

