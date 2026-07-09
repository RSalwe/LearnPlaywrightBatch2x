class PlayWrightConfig {
    readonly baseURL: string;
    readonly timeout: number;
    readonly retries: number;

    constructor(baseURL: string, timeout: number, retries: number) {
        this.baseURL = baseURL;
        this.timeout = timeout;
        this.retries = retries;
    }
    showConfig(): void {
        console.log("URL: " + this.baseURL);
        console.log("Timeout: " + this.timeout + " ms");
        console.log("Retries: " + this.retries);
    }
}
let config = new PlayWrightConfig("http://staging.com", 3000, 3);
config.showConfig();
//config.baseURL = "http://other.com"; // Can not change the value a it is read only