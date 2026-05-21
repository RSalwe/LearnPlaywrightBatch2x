// if ("hello") console.log("String is truthy");  //"hello" = truthy
// if (42) console.log("Number is truthy");
// if ({}) console.log("Empty object is truthy");
// if ([]) console.log("Empty array is truthy");

// if ("") console.log("Won't Print");
// if (null) console.log("Won't Print");
// if (undefined) console.log("Won't Print");
// if (NaN) console.log("Won't Print");
// if (0) console.log("Won't Print");

//ANY number except 0 is true but 0 is always false

let name = undefined;
if (name) {
    console.log("Hi");
} else {
    console.log("Bye");
}