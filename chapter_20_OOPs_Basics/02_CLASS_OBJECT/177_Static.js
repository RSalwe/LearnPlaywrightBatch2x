class student {
    //Below 2 are the staic fields which will be same for every objects
    static name = "Playwright2X";
    static mentor_Name = "Pramod Dutta";

    static display() {
        console.log("Hi, This is a common f(n)");

    }
    constructor(student_Name, age, phoneNo) {
        //Below 3 are the non-staic fields which will give different output for every new objects
        this.student_Name = student_Name;
        this.age = age;
        this.phoneNo = phoneNo
    }
}
const s1 = new student("Rana Singh", 35, "99885544332");
const s2 = new student("Shekhawat Singh", 45, "1122334455");
//Accessing the course and mentor name
console.log(student.name);
console.log(student.mentor_Name);

//Accessing the student's name
console.log(s1.student_Name);
console.log(s2.student_Name);

//Accessing the display function
student.display();

