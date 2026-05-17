console.log(0 == "");
console.log(0 == "0");
console.log("" == "0"); //(Transitivity Broken!)

console.log(0 == false);
console.log(null == 0);
console.log(null == undefined);//Loose
console.log(null === undefined);//Strict

console.log(5 != "g");//true
console.log(5 == "g");//false