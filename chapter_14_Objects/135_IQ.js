const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));//[ 'a', 'b', 'c' ]
console.log(Object.values(obj));//[ 1, 2, 3 ]
console.log(Object.entries(obj));//[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

const user = { name: "Michel", age: 45 };

//Below code to print user in 2 lines mostly used
for (const data in user) {
    console.log(`${data}: ${user[data]}`);

}

//Another way to write same above code
Object.keys(user).forEach(key => {
    console.log(key);
});