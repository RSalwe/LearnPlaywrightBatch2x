let rawResponse: unknown = {
    status: 200,
    body: { user: "Admin", role: "Tester" }
}

interface UserResponse {
    status: number;
    body: { user: string, role: string }
}

let response = rawResponse as UserResponse;
console.log("Status Code: ", response.status);
console.log("User: ", response.body.user);
console.log("Role :", response.body.role);


