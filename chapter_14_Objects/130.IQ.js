const user = {
    name: "John",
    age: 35,
    email: "john.35@gmail.com"
};
console.log(user);//{ name: 'John', age: 35, email: 'john.35@gmail.com' }
console.log(user.name);//John
console.log(user["age"]);//35

//Dynamic Property Access
const key = "age";
console.log(user[key]);

//Adding/Modifying properties

user.name = "Mike";
user.city = "NY";

console.log(user);

//Below one we never use
let obj = { name: "Logout" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// {
//   value: 'Logout',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
