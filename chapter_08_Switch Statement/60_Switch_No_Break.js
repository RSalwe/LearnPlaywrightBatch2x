let day = 2;
//ex. if monday = 1, tuesday = 2, .........
//if Break is not used system will print all the upcoming 
//console from the condition is true
//In below it will print all days from tuesday

switch (day) {
    case 0:
        console.log("Sunday - Rest Day");
    case 1:
        console.log("Monday - Sprint Planning");
    case 2:
        console.log("Tuesday - Development");
    case 3:
        console.log("Wednesday - Code Review");
    case 4:
        console.log("Thursday - Testing");
    case 5:
        console.log("Friday - Deployment & Retro");
    case 6:
        console.log("Saturday- Rest Day");
    default:
        console.log("Invalid Day Value!!")
}