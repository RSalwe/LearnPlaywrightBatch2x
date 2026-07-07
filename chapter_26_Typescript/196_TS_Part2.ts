//Primitive Types

let name: string = "Rupesh";
let age: number = 35;
let pi: number = 3.14;
let distance_to_moon: number = 398345633;
//let pi: float = 3.14; // This is not valid
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

//Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<String> = ["John", "Jane"];

//Any (avoid when possible)
let anything: any = "hello";

//Unknown (safer than any)
let unknown: unknown = "hello";

let message: string = "Hello, Typescript!";
let count: number = 50;

console.log(message);
console.log(count);
console.log(isActive);


