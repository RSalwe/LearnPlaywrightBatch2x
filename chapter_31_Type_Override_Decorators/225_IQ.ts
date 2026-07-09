class Father {
    home(): void {
        console.log("2BHK");
    }
}

class Rupesh extends Father {
    // override home(): void {
    //     console.log("3BHK");
    // }
}

let rupesh = new Rupesh();
// let parent = new Father();
rupesh.home();

// parent.home();
//If Rupesh class do not have anything in it then we can access the father class method using
//child class object
