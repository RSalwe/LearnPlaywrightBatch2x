//??

console.log(null == 0);//false as null is never equal to zero
console.log(null > 0);//false
console.log(null >= 0);// null == 0 (false) or null > 0 (true) [in OR 0-1 = 1] hence true
console.log(null === 0);//false

//?? Nullish Opertor - its use is to replace the null variable

let gokul = null;
let milk_Today = gokul ?? "Disnshaw's milk";
//Below "Dinshaw's milk" will display as gokul is defined as null
console.log(milk_Today);

let amul = "amul is present";
let milk_Today1 = amul ?? "Disnshaw's milk";
//Below "amul is present" will display as gokul is defined as such
console.log(milk_Today1);

//******Always REMEMBER ? is for Ternary Operator while ?? is for Nullish Operator in JS*****

//**** ?? is Nullish Operator in JS and ? is Nullish Operator in TS

// val = "which milk? ->" + val;
// console.log(val);