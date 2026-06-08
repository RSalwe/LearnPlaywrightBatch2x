const ENV = {
    BASE_URL: "https://staging.myapp.com",
    TIMEOUT: 5000,
    RETRIES: 2,
    BROWSER: "Chrome"
}

const EXPECTED_RESPONSE = {
    status: 200,
    body: {
        user: { role: "admin", active: true }
    }
}

console.log(EXPECTED_RESPONSE["status"]);
console.log(EXPECTED_RESPONSE.status);

const config = {
    //Base URLs
    baseUrl: 'http://localhost:3000',
    apiBaseUrl: 'http://localhost:3000/api',

    testUser: {
        userName: 'testuser@example.com',
        password: 'securePass123',
    },

    //Logging
    logLevel: 'INFO',

    //Retry Configuration

    retryCount: parseInt(process.env.RETRY_COUNT || '3', 10),
};