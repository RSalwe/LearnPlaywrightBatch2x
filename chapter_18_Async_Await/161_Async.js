async function testApi() {//If we use function always use async
    try {
        let result = await Promise.reject("503 reject"); //If we use statement always use await
    }
    catch (error) {
        console.log('Error', error);
    }
    finally {
        console.log("Clean Up!!!");
    }
}
testApi();