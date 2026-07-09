function getString(name: string): string {
    return "Rupesh";//As it is returning we cannot write void in above line
}
getString("Rupesh");
//getFirstResult(123); //This is not allowed

function getFirstResult<T>(results: T[]) {
    return results[0]!;
}
let firstCode = getFirstResult<number>([200, 300, 400]);
let firstTest = getFirstResult<string>(["Login", "Signup", "Cart"]);

console.log("First Code: " + firstCode);
console.log(("First Test: " + firstTest));

