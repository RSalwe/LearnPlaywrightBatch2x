let browser = ["Chrome", "Firefox", "Opera", "Safari", "Edge"];
console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);// Here Edge will be deleted

let removed = browser.shift();
console.log(browser);//Here Chrome will be deleted
console.log(removed);

//[ 'Firefox', 'Opera', 'Safari' ]

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "Safari") {
        console.log("Safari is removed");
    }
}