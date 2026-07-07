interface APIResponse {
    body: string;
    headers?: object;//? means optional
    responseTime?: number
}
let response1: APIResponse = {//without optional parameters
    body: 'Hi'
};
let response2: APIResponse = {//with optional parameters
    body: 'Hi',
    headers: {},
    responseTime: 2500
};
