//In real time if we have to keep the constant value separately then we can use enum
enum SeverityLevels {
    LOW = "low severity you may proceed!",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical",
    BLOCKING = "blocking"
}
console.log(SeverityLevels.LOW);//It will give the index value

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}
console.log(Environment.Staging);
