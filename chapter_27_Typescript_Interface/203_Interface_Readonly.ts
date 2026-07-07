interface APIResponse {
    readonly statusCode: number;
    body: string;
    headers?: object;
    responseTime?: number
}
let response: APIResponse = {
    statusCode: 200,
    body: '{"user": "admin"}'
};
console.log("Status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.headers);

//response.statusCode = 404;//Not allowed as statusCode is readonly
let new_Body = response.body = "abc abc abc";
console.log(new_Body);
