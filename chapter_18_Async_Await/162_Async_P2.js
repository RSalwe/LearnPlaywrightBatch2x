function getToken() {//This is a normal function which return a Promise
    return Promise.resolve("abc123");
}
async function run() { //This is a async function
    let token = await getToken();//we cannot just write await if the function is not async
    console.log(token);
}
run();