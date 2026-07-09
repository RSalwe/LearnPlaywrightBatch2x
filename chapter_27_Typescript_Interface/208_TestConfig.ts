interface TestConfig {
    browser: string;
    headless: boolean;
    baseURL: string;
    timeout?: number;
    retries?: number
}

let ciConfig: TestConfig = {
    browser: "Chrome",
    headless: true,
    baseURL: "https://staging.app.com"
}

let localConfig: TestConfig = {
    browser: "Firefox",
    headless: false,
    baseURL: "https://www.google.com",
    timeout: 1000,
    retries: 4
}
console.log("CI: ", ciConfig.browser, "| Timeout: ", ciConfig.timeout);
console.log("Local: ", localConfig.browser, "| TImeout: ", localConfig.timeout);

