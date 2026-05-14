// Difference between null and undefined in JavaScript

// ==========================================
// UNDEFINED
// ==========================================
// undefined means "a variable exists but has not been assigned a value"
// It is automatically assigned by JavaScript

let x;
console.log(x);           // undefined (declared but not assigned)
console.log(typeof x);    // "undefined"

function doNothing() { }
console.log(doNothing()); // undefined (function returns nothing)

const obj = {};
console.log(obj.name);    // undefined (property doesn't exist)

// ==========================================
// NULL
// ==========================================
// null means "the intentional absence of any object value"
// It must be explicitly assigned by the programmer

let y = null;
console.log(y);           // null
console.log(typeof y);    // "object" (this is a well-known JavaScript bug)

// ==========================================
// KEY DIFFERENCES
// ==========================================

// 1. Type difference
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"

// 2. Equality check
console.log(null == undefined);  // true  (loose equality)
console.log(null === undefined); // false (strict equality — different types)

// 3. Arithmetic operations
console.log(undefined + 10); // NaN (Not a Number)
console.log(null + 10);      // 10 (null coerces to 0)

// ==========================================
// PRACTICAL EXAMPLE
// ==========================================

let user = null; // Programmer explicitly says: "no user yet"
console.log(user); // null

let score;
console.log(score); // undefined — JS says "you never gave it a value"

// Use case: When you want to intentionally clear a value
let car = "BMW";
car = null; // explicitly removed
console.log(car); // null

// Use case: Checking if a value is provided
function greet(name) {
    if (name === undefined) {
        console.log("Hello, Guest!");
    } else {
        console.log("Hello, " + name);
    }
}

greet();       // "Hello, Guest!"
greet("TTA");  // "Hello, TTA"

// ==========================================
// QUICK COMPARISON TABLE
// ==========================================
// | Feature         | undefined        | null              |
// |-----------------|------------------|-------------------|
// | Meaning         | Not assigned     | Intentional empty |
// | Who sets it?    | JavaScript       | Programmer        |
// | typeof          | "undefined"      | "object"          |
// | == null         | true             | true              |
// | === null        | false            | true              |

