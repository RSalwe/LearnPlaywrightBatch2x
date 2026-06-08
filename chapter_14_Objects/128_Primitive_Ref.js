//Primitive vs Reference Types

//*****Primitive***** (number, string, boolean, null, undefined)
let a = 10;
let b = a; //This is call by reference as it is number variable
b = 99;
console.log(a);//10
console.log(b);     //99 - Here only value of b will 
// be updated to 99 and a will remain as 10

//*****Reference***** (object, array, function) 
let age1 = { val: 10 };
let age2 = age1; //This is copy by reference as it is object variable
age2.val = 20;
console.log(age1.val);//20
console.log(age2.val);//20





