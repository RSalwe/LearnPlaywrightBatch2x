# Learn Playwright Batch 2x

A comprehensive learning repository for **Playwright** automation testing and **JavaScript** fundamentals. This project is organized into chapters covering everything from basic JavaScript concepts to advanced Playwright testing techniques.

## 📚 Repository Structure

```
LEARNPLAYWRIGHTBATCH2x/
├── chapter_01_Basics/                 # JavaScript Basics
│   ├── 01_Basics.js                   # Hello World & console.log
│   ├── 02_JS.js                       # JavaScript fundamentals
│   ├── 03_JS_Verify_Setup.js          # Environment verification
│   └── 04_Hot_Code.js                 # Quick code snippets
│
├── chapter_02_Javascript_Concepts/    # Core JavaScript Concepts
│   ├── 05_JS_Basics.js                # Variable declarations (var)
│   └── js_identifier_rules.js         # JavaScript identifier naming rules
│
├── chapter_03_Identifier_Literals/    # Identifiers, Comments & Tools
│   ├── 06_JS_Identifier_Rules.js      # Identifier rules and conventions
│   ├── 07_Identifier_Part2.js         # Naming cases (camelCase, PascalCase, etc.)
│   ├── 08_JS_Comments.js              # Comments in JavaScript
│   ├── js_identifier_rules.js         # Complete identifier examples
│   ├── VS_Code_Keyboard_Shortcut_window.md  # VS Code shortcuts for Windows
│   └── VS_Code_Keyboard_Shortcut_mac.md     # VS Code shortcuts for Mac
│
├── chapter_04_Javascript_Concept/     # Variables, Scope & Hoisting
│   ├── 09_var_let_const.js            # Variable declarations overview
│   ├── 10_functions.js                # Function basics
│   ├── 11_var_explained.js            # var keyword explained
│   ├── 12_let_people_love.js          # let keyword explained
│   ├── 13_const_explained.js          # const keyword explained
│   ├── 14_var_functionscope.js        # var function scope
│   ├── 15_let_scope.js                # let block scope
│   ├── 16_Hoisting.js                 # Variable hoisting
│   ├── 17_hoisting_function.js        # Function hoisting
│   ├── 18_let_hoisting.js             # let hoisting & Temporal Dead Zone
│   ├── 19_let_hoisting_block.js       # let hoisting in blocks
│   ├── 20_const_hoisting.js           # const hoisting behavior
│   └── 21_Jr_QA.js                    # Junior QA concepts
│
├── chapter_05_Literal/                # JavaScript Literals
│   ├── 22_Literal.js                  # Introduction to literals
│   ├── 23_null_undefined.js           # null vs undefined differences
│   ├── 24_null.js                     # null in detail
│   ├── 25_Literal_All.js              # All literal types overview
│   ├── 26_Literal_Number_all.js       # Number types (decimal, binary, octal, hex, BigInt, etc.)
│   ├── 27_String.js                   # String basics
│   ├── 28_Template_Literal.js         # Template literals
│   └── 29_Backtick_single_double.js   # Backtick vs single vs double quotes
│
├── chapter_06_Operator/               # JavaScript Operators
│   ├── 30_Operator.js                 # Operators overview
│   ├── 31_Arithmetic_OP.js            # Arithmetic operators
│   ├── 32_Modulo_OP.js                # Modulo (remainder) operator
│   ├── 33_EXPO.js                     # Exponentiation operator
│   ├── 34_IQ.js                       # Operator interview questions
│   ├── 35_Comparison_OP.js            # Comparison operators
│   ├── 36_Comparison_strict_loose.js  # Strict (===) vs loose (==) equality
│   ├── 37_IQ_Loose_Strict.js          # Loose vs strict equality interview questions
│   ├── 38_Confusing_Comparison.js     # Tricky comparisons with typeof section
│   ├── 39_Logical_OP.js               # Logical operators
│   ├── 40_String_Concati_OP.js        # String concatenation operators
│   ├── 41_Ternary_OP.js               # Ternary operator
│   ├── 42_Typeof_OP.js                # typeof operator and type checking
│   ├── 43_Incre_Decre_OP.js           # Increment & decrement operators
│   ├── 44_Null_OP.js                  # Nullish coalescing operator
│   ├── 45_Post_Incre_OP.js            # Post increment/decrement operators
│   ├── 46_IQ_Incre_Decre_OP.js        # Increment/decrement interview questions
│   └── 47_IQ_Adv_Incre_Decre_OP.js    # Advanced increment/decrement interview questions
│
├── chapter_07_If_else/                # Conditional Statements
│   ├── 48_if_else.js                  # Basic if-else statements
│   ├── 49_if_elseif_else.js           # if-else-if ladder
│   ├── 50_real_if_else.js             # Real-world if-else examples
│   ├── 51_API_if_elseif_else.js       # API status code handling with if-else-if
│   ├── 52_IQ_if_else.js               # if-else interview questions
│   ├── 53_if_else_real.js             # More real-world if-else practice
│   ├── 54_IQ.js                       # Conditional logic IQ questions
│   ├── 55_Only_if.js                  # Single if statement usage
│   ├── 56_IQ_even_odd.js              # Even/odd check IQ
│   ├── 57_Grade_Calc.js               # Grade calculator example
│   ├── 58_Leap_Year.js                # Leap year checker
│   └── (20-May) TASK.js               # Practice tasks: HTTP status codes, test verdicts, build health, login lockout
│
├── chapter_08_Switch Statement/       # Switch Statements
│   ├── 59_Switch.js                   # Switch statement basics
│   ├── 60_Switch_No_Break.js          # Switch without break (fall-through)
│   ├── 61_Switch_Default.js           # Switch default case
│   ├── 62_switch_real.js              # Real-world switch examples
│   ├── 63_Switch_Group.js             # Grouping cases in switch
│   ├── 64_IQ1.js                      # Switch IQ questions 1
│   ├── 65_IQ2.js                      # Switch IQ questions 2
│   ├── 66_IQ3.js                      # Switch IQ questions 3
│   └── 67_IQ4.js                      # Switch IQ questions 4
│
├── chapter_09_User_Input/             # User Input Handling
│   ├── 68_User_Input.js               # Basic user input concepts
│   ├── 69_Node_readline.js            # Input using Node.js readline
│   └── 70_Prompt_Sync.js              # Synchronous prompt for input
│
├── chapter_10_Loop/                   # Loops in JavaScript
│   ├── 71_for_loop.js                 # for loop basics
│   ├── 72_for_Loop.js                 # for loop variations
│   ├── 73_for_loop2.js                # for loop patterns
│   ├── 74_IQ.js                       # Loop interview questions
│   ├── 75_for_of_in_each.js           # for...of vs for...in loops
│   ├── 76_while_loop.js               # while loop basics
│   ├── 77_do_while_loop.js            # do...while loop basics
│   ├── 78_do_while_real.js            # Real-world do...while examples
│   ├── 79_IQ.js                       # Loop IQ questions
│   ├── 80_IQ.js                       # Loop IQ questions
│   ├── 81_IQ.js                       # Loop IQ questions
│   ├── 82_IQ.js                       # Loop IQ questions
│   └── (22-May) TASK.js               # Practice tasks: Triangle Classifier, FizzBuzz
│
├── chapter_11_Arrays/                 # Arrays in JavaScript
│   ├── 83_Arrays.js                   # Array basics, empty arrays, mixed types
│   ├── 84_Arrays.js                   # Creating arrays: literal, constructor, Array.of, Array.from
│   ├── 85_Access_Array.js             # Accessing and modifying arrays, .at() method
│   ├── 86_Arrays_Adding_Remove.js     # push, pop, unshift, shift
│   ├── 87_Adding_Remove2.js           # splice: insert, delete, replace
│   ├── 88_Real_Example.js             # Real-world array manipulations
│   ├── 89_Searching.js                # indexOf, lastIndexOf, includes, find, findIndex, findLast, findLastIndex
│   ├── 90_Iterate.js                  # Iteration: for, for...of, forEach, for...in
│   ├── 91_Tranform_Array.js           # map, filter, reduce, flat
│   ├── 92_Arrays_Sorting.js           # sort() with lexicographic and numeric comparator
│   ├── 93_Array_slicing.js            # slice(start, end) — non-mutating subarray extraction
│   ├── 94_Concat_Array.js             # concat() and spread operator [...a, ...b]
│   └── 95_Array_Checking.js           # Array.isArray, every, some
│
├── chapter_12_Functions/              # Functions in JavaScript
│   ├── 96_Functions.js                # Function definition and calling basics
│   ├── 97_Type1_Fn_Basic_Function.js  # Type 1: No parameters, no return
│   ├── 98_Type2_Fn_With_Param_No_Return.js  # Type 2: With parameters, no return
│   ├── 99_Type3_Fn_without_Param_Return_Type.js  # Type 3: No parameters, with return
│   ├── 100_Type4_Fn_with_Param_Return_Type.js      # Type 4: With parameters and return
│   ├── 101_Template_Literal.js        # Template literals inside functions
│   ├── 102_Fn_Expression.js           # Function expressions
│   ├── 103_Arrow_Function.js          # Arrow functions (ES6) — basics
│   ├── 104_Arrow_Fn_REAL.js           # Arrow functions — real-world status code validation
│   ├── 105_IIFE.js                    # Immediately Invoked Function Expressions (IIFE)
│   ├── 106_Default_Param_Fn.js        # Default parameters in functions
│   ├── 107_IQ.js                      # Function return values — interview question
│   ├── 108_Rest_Param_Fn.js           # Rest parameters (`...args`)
│   ├── 109_IQ.js                      # Function hoisting, TDZ, return behavior — IQ
│   ├── 110_Spread_IQ.js               # Spread operator in function calls
│   ├── 111_Scope_Fn.js                # Global vs local scope in functions
│   ├── 112_IQ.js                      # Nested scope and closure concept — IQ
│   ├── 113_Closure.js                 # Closure basics — returning inner function
│   ├── 114_Closure.js                # Closure counter example with increment/decrement/get
│   ├── 115_Closure_API_REAL.js        # Real-world closure: retry tracker for API tests
│   ├── 116_Highr_Order_Fn.js          # Higher-order functions (accept/return functions)
│   └── 117_Pure_Fn.js                 # Pure vs impure functions
│
├── chapter_13_Strings/                # Strings in JavaScript
│   ├── 118_Strings.js                 # String basics, String() conversion, JSON.stringify for arrays
│   ├── 119_String_Properties.js       # length, index access, .at(), charAt, charCodeAt
│   ├── 120_Search_Check_String.js     # includes, startsWith, endsWith, indexOf, lastIndexOf, search (regex)
│   ├── 121_Substring.js               # slice, substring, negative index handling
│   ├── 122_Transform_String.js        # toUpperCase, toLowerCase, trim, replace, replaceAll, concat, split, join
│   └── 123_SC.js                      # String conversion: toString(), Number(), parseInt, parseFloat
│
├── chapter_15_2D_Array/               # 2D Arrays (Matrices) in JavaScript
│   ├── 138_2D_Array.js                # 2D array basics and initialization
│   ├── 139_2D_IQ.js                   # 2D array interview questions
│   ├── 140_2D_REAL.js                 # Real-world 2D array examples
│   ├── 141_2D_Array_Fn.js             # 2D array functions and methods
│   ├── 142_IQ_Write_Pyrad_Pattern.js  # Pyramid pattern writing exercises
│   ├── testData.csv                   # Sample test data for 2D array operations
│   └── 08-JUN-2026 (TASK).js          # Practice tasks for 2D arrays
│
├── Demo_Practice.js                   # Practice snippets & tricky coercion examples
│
└── README.md                          # This file
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RSalwe/LearnPlaywrightBatch2x.git
cd LearnPlaywrightBatch2x
```

2. Install dependencies (when Playwright is added):
```bash
npm install
```

3. Run JavaScript files:
```bash
node chapter_01_Basics/01_Basics.js
```

## 📖 Chapter Overview

### Chapter 1: Basics
- Setting up JavaScript environment
- Understanding `console.log()`
- Verifying Node.js setup

### Chapter 2: JavaScript Concepts
- Variable declarations (`var`)
- JavaScript identifier rules
- Best practices for naming variables

### Chapter 3: Identifiers, Comments & Developer Tools
- **Naming Conventions:**
  - `camelCase` — variables, functions
  - `PascalCase` — classes, constructors
  - `snake_case` — valid but uncommon in JS
  - `UPPER_SNAKE_CASE` — constants
  - `kebab-case` — invalid in JS identifiers
- **Comments:** Single-line (`//`) and multi-line (`/* */`)
- **VS Code Shortcuts:** Complete reference for Windows and Mac

### Chapter 4: Variables, Scope & Hoisting
- **Variable Declarations:**
  - `var` — function-scoped, hoisted, redeclarable
  - `let` — block-scoped, hoisted to TDZ, reassignable
  - `const` — block-scoped, hoisted to TDZ, must be initialized
- **Scope:** Function scope vs block scope, variable leaking in loops
- **Hoisting:** Variable hoisting (`undefined`), function hoisting, `let`/`const` TDZ behavior
- **Functions:** Defining and calling reusable code blocks

### Chapter 5: JavaScript Literals
- **null vs undefined** — differences and use cases
- **Number Types:**
  - Decimal, Binary (`0b`), Octal (`0o`), Hexadecimal (`0x`)
  - Scientific notation (`1e5`)
  - Numeric separators (`1_000_000`)
  - BigInt (`123n`)
  - Special values: `Infinity`, `-Infinity`, `NaN`
- **Strings:** Single quotes, double quotes, template literals (backticks)
- **String Interpolation:** Embedding variables with `${}` inside backticks
- **Multi-line strings** using template literals

### Chapter 6: JavaScript Operators
- **Arithmetic:** `+`, `-`, `*`, `/`, `%`, `**`
- **Comparison:** Loose (`==`) vs strict (`===`), truthy & falsy behavior
- **Confusing Comparisons & typeof:** Edge cases like `[] == 0`, `typeof null === "object"`, `NaN` quirks
- **Logical:** `&&`, `||`, `!`
- **Ternary:** Conditional expressions
- **String Concatenation:** Coercion behavior with strings and numbers
- **Increment/Decrement:** `++`, `--`, post-increment/decrement behavior
- **Increment/Decrement Interview Questions:** Common and advanced IQ patterns
- **typeof Operator:** Checking variable types (`typeof null === "object"`, `typeof NaN === "number"`, etc.)
- **Nullish Coalescing (`??`):** Handling `null` and `undefined` default values

### Chapter 7: Conditional Statements (if-else)
- **if-else:** Basic conditional branching
- **if-else-if ladder:** Multiple condition checks
- **API Status Code Handling:** Practical example handling HTTP status codes (200, 201, 400, 401, 403, 404, 500, 502, 503, etc.)
- **Real-world Examples:** Grade calculator, leap year checker, even/odd checks
- **Interview Questions:** Common conditional logic IQ problems
- **Practice Tasks (20-May):**
  - HTTP Status Code Categorizer (200, 300, 400, 500 ranges)
  - Test Case Pass/Fail Verdict with emoji indicators
  - Impact Score Severity classification (Critical, High, Medium, Low)
  - Build Health Reporter (Green, Stable, Unstable, Broken)
  - Login Lockout after failed attempts

### Chapter 8: Switch Statements
- **Switch Basics:** Using `switch` for multi-way branching
- **Fall-through Behavior:** Cases without `break`
- **Default Case:** Handling unmatched values
- **Grouping Cases:** Multiple cases sharing the same logic
- **Interview Questions:** Switch statement patterns and edge cases

### Chapter 9: User Input
- **Input Concepts:** Handling user input in JavaScript
- **Node.js readline:** Asynchronous input using `readline` module
- **Synchronous Prompt:** Using `prompt-sync` for blocking input

### Chapter 10: Loops
- **for Loop:** Basic syntax, initialization, condition, increment/decrement
- **for Loop Variations:** Different patterns and use cases
- **for...of vs for...in:** Iterating over arrays and objects
- **while Loop:** Pre-test loop with condition-first execution
- **do...while Loop:** Post-test loop ensuring at least one execution
- **Real-world Examples:** Practical loop usage scenarios
- **Interview Questions:** Common loop patterns, edge cases, and IQ problems
  - **Practice Tasks (22-May):**
    - Triangle Classifier (equilateral, isosceles, scalene)
    - FizzBuzz Test (classic loop and conditional logic exercise)

### Chapter 11: Arrays
- **Array Basics:** Empty arrays, mixed types, length vs index
- **Creating Arrays:**
  - Array literal (preferred): `let arr = [1, 2, 3]`
  - Array constructor: `new Array(3)` creates a sparse array with 3 empty slots; `new Array(1, 2, 3)` creates `[1, 2, 3]`
  - `Array.of(10, 20, 30)` — creates array from arguments regardless of count
  - `Array.from("hello")` — creates array from iterable or array-like objects
- **Accessing & Modifying:** Index access (`arr[0]`), `.at(-1)` for reverse access, modifying existing indices
- **Adding & Removing:**
  - `push()` / `pop()` — add/remove at end
  - `unshift()` / `shift()` — add/remove at beginning
  - `splice(start, deleteCount, ...items)` — insert, delete, or replace at any index
- **Searching:** `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`, `findLast`, `findLastIndex`
- **Iteration:** `for` loop, `for...of`, `forEach`, `for...in`
- **Transform Methods:** `map`, `filter`, `reduce`, `flat`
- **Sorting:** `sort()` lexicographic default, numeric comparator `(a, b) => a - b`
- **Slicing:** `slice(start, end)` — non-mutating subarray extraction
- **Concatenation:** `concat()`, spread operator `[...a, ...b]`, `join()`
- **Checking:** `Array.isArray()`, `every()`, `some()`

### Chapter 12: Functions
- **Function Basics:** Defining and calling functions
- **Function Types:**
  - Type 1: No parameters, no return
  - Type 2: With parameters, no return
  - Type 3: No parameters, with return
  - Type 4: With parameters and return
- **Template Literals in Functions:** Using backticks and `${}` interpolation
- **Function Expressions:** Assigning functions to variables
- **Arrow Functions (ES6):** Concise syntax, implicit returns, single-parameter shorthand; real-world status code validation example
- **IIFE (Immediately Invoked Function Expressions):** Self-executing functions for isolated scope
- **Default Parameters:** Providing fallback values for function arguments (`maxRetries = 3`, `delay = 1000`)
- **Rest Parameters:** Collecting multiple arguments into an array using `...args`
- **Spread Operator:** Expanding arrays into individual arguments when calling functions
- **Scope in Functions:** Global scope vs local (`let`/`const` block scope), accessibility rules
- **Closures:** Inner functions retaining access to outer function variables even after outer execution completes; counter example and real-world retry tracker for API testing
- **Higher-Order Functions:** Functions that accept other functions as arguments or return functions
- **Pure Functions:** Deterministic functions with no side effects vs impure functions dependent on external state

### Chapter 13: Strings
- **String Basics:** Single quotes, double quotes, template literals (backticks), multiline strings
- **String Conversion:** `String(value)` vs `JSON.stringify([1, 2])` to preserve array brackets
- **String Properties:** `length`, index access (`str[0]`), `.at(-1)` for reverse access, `charAt()`, `charCodeAt()`
- **Searching & Checking:**
  - `includes()` — substring presence check
  - `startsWith()` / `endsWith()` — prefix/suffix checks
  - `indexOf()` / `lastIndexOf()` — first/last occurrence index
  - `search()` — regex-based search returning index
- **Substring Extraction:**
  - `slice(start, end)` — supports negative indexes
  - `substring(start, end)` — treats negatives as 0
- **String Transformation:**
  - Case: `toUpperCase()`, `toLowerCase()`
  - Whitespace: `trim()`, `trimStart()`, `trimEnd()`
  - Replacement: `replace()`, `replaceAll()`, regex `/g` flag
  - Concatenation: `+` operator, `.concat()`
  - Split & Join: `split()`, `join()` — converting between strings and arrays
- **String Conversion Methods:** `.toString()`, `Number()`, `parseInt()`, `parseFloat()`

### Chapter 15: 2D Arrays (Matrices)
- **2D Array Basics:** Creating and initializing 2D arrays (matrices)
- **2D Array Interview Questions:** Common IQ problems and patterns
- **Real-world Examples:** Practical 2D array applications
- **2D Array Functions:** Functions and methods for matrix operations
- **Pattern Writing:** Pyramid and matrix pattern exercises
- **Practice Tasks (08-JUN-2026):** Hands-on exercises for 2D arrays

#### `new Array(3)` — Sparse Array Behavior
```javascript
let scores = new Array(3);
// Result: [empty × 3] — sparse array with 3 slots
console.log(scores.length);  // 3
console.log(scores[0]);      // undefined
```

⚠️ **The Sparse Array Trap:** `map()`, `forEach()`, and `for...of` skip empty slots.
```javascript
let a = new Array(3);
a.map(() => 'x');  // [empty × 3] — callback never runs!

let b = [undefined, undefined, undefined];
b.map(() => 'x');  // ['x', 'x', 'x'] — works fine
```

**Better Alternatives:**
```javascript
// Fill with values
let scores = Array(3).fill(0);              // [0, 0, 0]

// Array.from (creates real values)
let scores = Array.from({length: 3});       // [undefined, undefined, undefined]

// Literal (if values known)
let scores = [0, 0, 0];
```

## ⌨️ VS Code Keyboard Shortcuts

Quick reference guides are available for:
- [Windows Shortcuts](chapter_03_Identifier_Literals/VS_Code_Keyboard_Shortcut_window.md)
- [Mac Shortcuts](chapter_03_Identifier_Literals/VS_Code_Keyboard_Shortcut_mac.md)

Categories covered:
- General editing
- Navigation
- Line manipulation
- View controls
- Debugging
- Terminal
- Emmet abbreviations

## 📝 JavaScript Naming Conventions Summary

| Case | Example | Usage |
|------|---------|-------|
| camelCase | `getUserData` | Variables, functions |
| PascalCase | `UserProfile` | Classes, constructors |
| snake_case | `user_profile` | Valid but uncommon |
| UPPER_SNAKE_CASE | `MAX_SIZE` | Constants |
| lowercase | `name` | Simple variables |
| UPPERCASE | `DEBUG` | Simple constants |
| kebab-case | `user-profile` | **Invalid** in JS identifiers |

## 🤝 Contributing

This is a personal learning repository. Feel free to fork and adapt for your own learning journey.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Happy Learning! 🎉
