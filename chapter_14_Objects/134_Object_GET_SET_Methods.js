//Below is the older way of creating objects when
//the classes and objects were not introduced

const user = {
    firstName: "Akshay",
    lastName: "Kumar",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}
//Above one we never use

//this. --> keyword means current value in the object

console.log(user.fullName);
user.fullName = "Amit Sharma";
console.log(user.fullName);

