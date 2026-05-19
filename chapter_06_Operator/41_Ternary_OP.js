let rajkumar_age = 20;
//                   ---(Condition)----  -(Output for True)- -(Output for False)- 
let rk_will_go_goa = rajkumar_age >= 20 ? "rk_will_go_goa" : "will_not_go_to_goa";
console.log(rk_will_go_goa);

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testresult = actualStatusCode === expectedStatusCode ? "\u2705 PASS" : "\u274C FAILED";
console.log(testresult);

let environment = "staging";
let baseUrl = environment === "prod" ? "https://api.example.com" : "https://staging-api.example.com";
//above staging is no equal to prod and hence 2nd output will be displayed
console.log(baseUrl);

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
//above isCI is already defined as true and hence 1st output will be displayed
console.log("launching browser is", browserMode, "Mode");

let responseTime = 850; //ms
let sla = 1000; //ms
let slastaus = responseTime <= sla ? "Within SLA \u2705" : "SLA breached \u274C";
//above 850 is less than 1000 and hence 1st output will be displayed
console.log(`Response: ${responseTime} - ${slastaus}`);

let condition = true;
let isSK_Male = condition ? "true" : "false";
console.log(isSK_Male);

//Nested Ternary
//Multiple Condition
//These are rarely used

let ramesh_age = 35;
let ramesh_go_goa = ramesh_age > 20 ? (ramesh_age > 25 ? "Ramesh will Drink" : "Ramesh wont Drink") : "No, Ramesh wont go to goa";
console.log(ramesh_go_goa);


let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);

let temp = 35;
let feel =
    (temp >= 40) ? "Very Hot" :
        (temp >= 30) ? "Hot" :
            (temp >= 20) ? "Warm" :
                (temp >= 10) ? "Cold" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);