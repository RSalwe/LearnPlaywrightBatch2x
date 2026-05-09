// =====================================================
// JavaScript Naming Conventions (Cases)
// =====================================================

// Naming conventions are style guidelines for naming identifiers.
// They help make code more readable and maintainable.

// -----------------------------------------------------
// 1. camelCase
// -----------------------------------------------------
// First word lowercase, each subsequent word capitalized.
// Most common convention in JavaScript.
// Used for: variables, functions, methods, properties

let firstName = "John";
let userProfileData = {};
let totalItemCount = 0;

function getUserData() {
    return userProfileData;
}

function calculateTotalPrice() {
    return totalItemCount * 10;
}

// -----------------------------------------------------
// 2. PascalCase (UpperCamelCase)
// -----------------------------------------------------
// Every word starts with uppercase letter.
// Used for: classes, constructors, React components, enums

class UserProfile {}
class ShoppingCart {}
class HttpRequestHandler {}

// Constructor functions (older style)
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// -----------------------------------------------------
// 3. snake_case
// -----------------------------------------------------
// All lowercase with underscores between words.
// Valid in JavaScript but uncommon.
// More common in Python, Ruby, etc.

let first_name = "John";
let user_profile_data = {};
let total_item_count = 0;

function get_user_data() {
    return user_profile_data;
}

// -----------------------------------------------------
// 4. UPPER_SNAKE_CASE / SCREAMING_SNAKE_CASE
// -----------------------------------------------------
// All uppercase with underscores between words.
// Used for: constants, configuration values, environment variables

const MAX_SIZE = 100;
const API_KEY = "abc123";
const DATABASE_URL = "localhost:5432";
const DEFAULT_TIMEOUT = 5000;
const PI = 3.14159;

// -----------------------------------------------------
// 5. lowercase
// -----------------------------------------------------
// All lowercase, no separators.
// Valid but can be hard to read for multi-word identifiers.
// Used for: simple/single-word variables

let name = "John";
let age = 25;
let city = "New York";

// Avoid for multi-word identifiers (hard to read)
// let userprofiledata = {}; // Hard to read

// -----------------------------------------------------
// 6. UPPERCASE
// -----------------------------------------------------
// All uppercase, no separators.
// Valid for simple constants.
// Used for: single-word constants, abbreviations

const DEBUG = true;
const ENV = "production";
const API = "https://api.example.com";

// Avoid for multi-word identifiers (hard to read)
// const MAXSIZE = 100; // Hard to read, use MAX_SIZE instead

// -----------------------------------------------------
// 7. kebab-case (dash-case, hyphen-case)
// -----------------------------------------------------
// All lowercase with hyphens between words.
// INVALID as JavaScript identifier (hyphen is subtraction operator).
// Used in: HTML attributes, CSS classes, URLs, filenames

// let first-name = "invalid"; // SyntaxError: invalid left-hand side in assignment
// let user-profile = {};      // SyntaxError
// let content-type = "text";  // SyntaxError

// Valid usage outside JavaScript identifiers:
// HTML: <div data-user-role="admin"></div>
// CSS:  .user-profile { color: blue; }
// File: user-profile.js

// -----------------------------------------------------
// 8. Hungarian Notation (Historical/Deprecated)
// -----------------------------------------------------
// Prefix indicates type or purpose.
// Not recommended in modern JavaScript.

// let strName = "John";       // string prefix
// let bIsActive = true;       // boolean prefix
// let nCount = 0;             // number prefix
// let arrUsers = [];          // array prefix
// let elButton = document...; // element prefix

// Modern JavaScript uses let/const and descriptive names instead.

// -----------------------------------------------------
// 9. Private Class Members (_prefix)
// -----------------------------------------------------
// Leading underscore convention for private/protected members.
// Note: Modern JS has native private fields with # prefix.

class BankAccount {
    #balance = 0;              // Native private field (ES2022+)
    
    constructor(ownerName) {
        this.ownerName = ownerName;      // public
        this._accountType = "checking";  // convention: intended private
    }
    
    // Native private method
    #validateAmount(amount) {
        return amount > 0;
    }
    
    // Convention-based private method
    _logTransaction() {
        console.log("Transaction logged");
    }
}

// -----------------------------------------------------
// Summary Table of Conventions
// -----------------------------------------------------
// Convention      | Example              | Use Case
// ----------------|----------------------|---------------------------
// camelCase       | getUserData          | variables, functions
// PascalCase      | UserProfile          | classes, components
// snake_case      | user_profile_data    | valid but uncommon in JS
// UPPER_SNAKE_CASE| MAX_SIZE             | constants
// lowercase       | name                 | simple variables
// UPPERCASE       | DEBUG                | simple constants
// kebab-case      | user-profile         | INVALID in JS identifiers
// _prefix         | _privateVar          | convention for private
// #prefix         | #privateField        | native private (ES2022+)

// -----------------------------------------------------
// Practical Example: Using Multiple Conventions Together
// -----------------------------------------------------

const MAX_CART_ITEMS = 50;           // UPPER_SNAKE_CASE - constant
const TAX_RATE = 0.08;               // UPPER_SNAKE_CASE - constant

class ShoppingCart {                 // PascalCase - class
    #items = [];                     // #private - native private field
    
    constructor(customerName) {      // camelCase - parameter
        this.customerName = customerName; // camelCase - property
        this._createdAt = new Date();     // _prefix - convention private
        this.item_count = 0;              // snake_case - valid but uncommon
    }
    
    addItem(productName, price) {    // camelCase - method
        if (this.#items.length >= MAX_CART_ITEMS) {
            throw new Error("Cart is full");
        }
        this.#items.push({ name: productName, price: price });
        this.item_count++;
    }
    
    getTotalPrice() {                // camelCase - method
        let subtotal = this.#items.reduce((sum, item) => sum + item.price, 0);
        let tax = subtotal * TAX_RATE;
        return subtotal + tax;
    }
    
    #validateCart() {                // #private - native private method
        return this.#items.length > 0;
    }
}

let currentCart = new ShoppingCart("Alice"); // camelCase - variable
currentCart.addItem("Laptop", 999.99);
currentCart.addItem("Mouse", 29.99);
console.log(`Total: $${currentCart.getTotalPrice().toFixed(2)}`);

// -----------------------------------------------------
// Best Practices
// -----------------------------------------------------
// 1. Be consistent within a project/team
// 2. Follow team style guide or linter rules (ESLint)
// 3. Use descriptive, meaningful names
// 4. Avoid single-letter names except in loops (i, j, k)
// 5. Avoid abbreviations unless universally known (url, api, id)
// 6. Boolean variables: use prefixes like is, has, can (isActive, hasPermission)
// 7. Function names: use verb + noun (getData, calculateTotal, validateInput)
