// ==========================================
// API Status Code Handler using if-else-if
// ==========================================

/**
 * Handles HTTP status codes using if-else-if statements.
 * Demonstrates how to route API responses based on status codes.
 *
 * @param {number} statusCode - HTTP status code from API response
 * @returns {string} Message describing the status
 */
function handleApiStatusCode(statusCode) {
    let message;

    // 2xx Success
    if (statusCode === 200) {
        message = "200 OK: API request succeeded. Data retrieved successfully.";
    }
    else if (statusCode === 201) {
        message = "201 Created: Resource created successfully.";
    }
    else if (statusCode === 204) {
        message = "204 No Content: Request succeeded but no content to return.";
    }
    // 3xx Redirection
    else if (statusCode === 301) {
        message = "301 Moved Permanently: Resource has been moved to a new URL.";
    }
    else if (statusCode === 302) {
        message = "302 Found: Resource temporarily moved to a different URL.";
    }
    else if (statusCode === 304) {
        message = "304 Not Modified: Resource not modified since last request.";
    }
    // 4xx Client Errors
    else if (statusCode === 400) {
        message = "400 Bad Request: Invalid request. Please check your input data.";
    }
    else if (statusCode === 401) {
        message = "401 Unauthorized: Authentication required. Please log in.";
    }
    else if (statusCode === 403) {
        message = "403 Forbidden: You don't have permission to access this resource.";
    }
    else if (statusCode === 404) {
        message = "404 Not Found: The requested resource does not exist.";
    }
    else if (statusCode === 409) {
        message = "409 Conflict: Request conflict with current state of the resource.";
    }
    else if (statusCode === 422) {
        message = "422 Unprocessable Entity: Validation failed. Please check your data.";
    }
    else if (statusCode === 429) {
        message = "429 Too Many Requests: Rate limit exceeded. Please try again later.";
    }
    // 5xx Server Errors
    else if (statusCode === 500) {
        message = "500 Internal Server Error: Something went wrong on the server.";
    }
    else if (statusCode === 502) {
        message = "502 Bad Gateway: Invalid response from upstream server.";
    }
    else if (statusCode === 503) {
        message = "503 Service Unavailable: Server is temporarily unavailable.";
    }
    else if (statusCode === 504) {
        message = "504 Gateway Timeout: Server didn't respond in time.";
    }
    // Fallback for any other status code
    else {
        message = `Status ${statusCode}: Unknown or unhandled status code received.`;
    }

    return message;
}


// ==========================================
// Example Usage with Mock API Responses
// ==========================================

const mockApiResponses = [200, 201, 400, 401, 403, 404, 500, 502, 503, 999];

console.log("=== API Status Code Handler Demo ===\n");

for (const status of mockApiResponses) {
    console.log(`Status: ${status} => ${handleApiStatusCode(status)}`);
}


// ==========================================
// Practical Example: Using with fetch()
// ==========================================

async function fetchUserData(userId) {
    try {
        // Simulating an API call
        // const response = await fetch(`https://api.example.com/users/${userId}`);
        // const statusCode = response.status;

        // For demo purposes, using a mock status code
        const statusCode = 200;

        console.log("\n--- Fetch Example ---");
        console.log(`Fetching user ${userId}...`);
        console.log(handleApiStatusCode(statusCode));

        // You can also return different actions based on status
        if (statusCode === 200 || statusCode === 201) {
            // return await response.json();
            return { id: userId, name: "John Doe" };
        }
        else if (statusCode === 401) {
            // Redirect to login
            console.log("Action: Redirecting to login page...");
            return null;
        }
        else if (statusCode === 404) {
            // Show "not found" message
            console.log("Action: Displaying 'User not found' error...");
            return null;
        }
        else if (statusCode >= 500) {
            // Retry or show server error
            console.log("Action: Showing server error message...");
            return null;
        }
        else {
            console.log("Action: Generic error handling...");
            return null;
        }

    } catch (error) {
        console.error("Network or unexpected error:", error.message);
        return null;
    }
}

// Run the fetch example
fetchUserData(101);


// ==========================================
// Interview Question Style Example
// ==========================================

function classifyStatusCode(statusCode) {
    if (statusCode >= 200 && statusCode < 300) {
        return "Success";
    }
    else if (statusCode >= 300 && statusCode < 400) {
        return "Redirection";
    }
    else if (statusCode >= 400 && statusCode < 500) {
        return "Client Error";
    }
    else if (statusCode >= 500 && statusCode < 600) {
        return "Server Error";
    }
    else {
        return "Invalid Status Code";
    }
}

console.log("\n=== Status Code Classification ===");
console.log(`200 -> ${classifyStatusCode(200)}`);
console.log(`302 -> ${classifyStatusCode(302)}`);
console.log(`404 -> ${classifyStatusCode(404)}`);
console.log(`500 -> ${classifyStatusCode(500)}`);
console.log(`99  -> ${classifyStatusCode(99)}`);
