enum Browser {
    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge"
}

function launchBrowser(browser: Browser): void {
    switch (browser) {
        case Browser.Chrome:
            console.log("Launching Chromium (Chrome V115)");
            break;
        case Browser.Firefox:
            console.log("Launching Gecko (Firefox V112)");
            break;
        case Browser.Safari:
            console.log("Launching Webkit (Safari V107)");
            break;
        case Browser.Edge:
            console.log("Launching Chromium (Edge V120)");
            break;
    }
}
launchBrowser(Browser.Chrome)