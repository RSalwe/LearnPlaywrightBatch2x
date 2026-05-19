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
│   ├── 42_Type_OP.js                  # Type-related operators
│   ├── 43_Incre_Decre_OP.js           # Increment & decrement operators
│   ├── 44_Null_OP.js                  # Nullish coalescing operator
│   ├── 45_Post_Incre_OP.js            # Post increment/decrement operators
│   ├── 46_IQ_Incre_Decre_OP.js        # Increment/decrement interview questions
│   └── 47_IQ_Adv_Incre_Decre_OP.js    # Advanced increment/decrement interview questions
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
- **Type & Nullish Coalescing (`??`):** typeof, nullish coalescing

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
