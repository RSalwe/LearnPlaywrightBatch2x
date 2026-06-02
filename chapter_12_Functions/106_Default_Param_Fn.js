function retry(testName, maxRereies = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRereies} times ${delay}`);
}

retry("Login_Test"); // Here retry will take default param i.e. maxRereies = 3, delay = 1000
retry("Registration_Test", 10, 2000);// here retry will take new parameters
