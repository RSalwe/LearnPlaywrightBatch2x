//Async & Await
//Wehn step 2 depends on step 1's result, you MUST run them sequentially

//Step 1 - Step 2

// Below is the normal function which returns promise
function apicall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 ok")
        }, 2000);
    })
}

async function parellelTest() {

    let [r1, r2, r3] = await Promise.allSettled([//Does not matter you fail or pass all should be settled
        apicall("Auth Service"),
        apicall("User Account Creation"),
        apicall("Support Page API")
    ])

    console.log(r1);
    console.log(r2);
    console.log(r3);
};
parellelTest();