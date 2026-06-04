let str = "Hello, World!"
console.log(typeof ("500"));//string
console.log(str.length);//12  -> length start from 1 and index starts from 0

//Access string by index
console.log(str[0]);//H
console.log(str[7]);//W

//Access string by index in reverse
console.log(str[-1]);//undefined as it is not valid here like array
console.log(str.at(-1));//!
console.log(str.at(-6));//W

//index always starts from 0 , length always starts from 1

console.log(str.charAt(0));//H
console.log(str.charCodeAt(0));// code of H = 72