//Object Deconstructor
const user = { name1: "John", age: 35, city: "NYC" };

//Basic Deconstructing
const { name1, age } = user;
console.log(name1);
console.log(age);

//Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

//desctructuring
const { age1 } = user;

//Default values
const { country = "USA" } = user;
console.log(country);//USA
console.log(user);//{ name1: 'John', age: 35, city: 'NYC' }

const data = {
    user1:
    {
        name: "Jonhy", address:
        {
            city1: "NYC"
        }
    }

};

const { user1: { address: { city1 } } } = data;
console.log(data.user1.address.city1);//NYC

console.log(city1);//NYC


