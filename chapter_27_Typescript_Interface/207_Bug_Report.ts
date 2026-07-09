interface BugReport {
    id: number;
    title: string;
    severity: string;
    stepsToReproduce: string[]
}
//In real time interface will be hidden and we can create n number of id's as below
const bugReport1: BugReport = {
    id: 1,
    title: "Login Issue",
    severity: "Critical",
    stepsToReproduce: ["Step1", "Step2"]
}

const bugReport2: BugReport = {
    id: 2,
    title: "Access Issue",
    severity: "High",
    stepsToReproduce: ["Step3", "Step4"]
}

const bugReport3: BugReport = {
    id: 2,
    title: "Logout Issue",
    severity: "High",
    stepsToReproduce: ["Step5", "Step6"]
}