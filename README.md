# Learn Playwright Batch 2x

A comprehensive learning repository for **Playwright** automation testing and **JavaScript** fundamentals. This project is organized into chapters covering everything from basic JavaScript concepts to advanced Playwright testing techniques.

## 📚 Repository Structure

```
LEARNPLAYWRIGHTBATCH2x/
├── chapter_01_Basics/              # JavaScript Basics
│   ├── 01_Basics.js                # Hello World & console.log
│   ├── 02_JS.js                    # JavaScript fundamentals
│   ├── 03_JS_Verify_Setup.js       # Environment verification
│   └── 04_Hot_Code.js              # Quick code snippets
│
├── chapter_02_Javascript_Concepts/  # Core JavaScript Concepts
│   ├── 05_JS_Basics.js             # Variable declarations (var)
│   └── js_identifier_rules.js      # JavaScript identifier naming rules
│
├── chapter_03_Identifier_Literals/  # Identifiers, Literals & Tools
│   ├── 06_JS_Identifier_Rules.js   # Identifier rules and conventions
│   ├── 07_Identifier_Part2.js      # Naming cases (camelCase, PascalCase, etc.)
│   ├── 08_JS_Comments.js           # Comments in JavaScript
│   ├── 09_var_let_const.js         # Variable declarations overview
│   ├── 10_functions.js             # Function basics
│   ├── 11_var_explained.js         # var keyword explained
│   ├── 12_let_people_love.js       # let keyword explained
│   ├── 13_const_explained.js       # const keyword explained
│   ├── 14_var_functionscope.js     # var function scope
│   ├── 15_let_scope.js             # let block scope
│   ├── 16_Hoisting.js              # Variable hoisting
│   ├── 17_hoisting_function.js     # Function hoisting
│   ├── js_identifier_rules.js      # Complete identifier examples
│   ├── VS_Code_Keyboard_Shortcut_window.md   # VS Code shortcuts for Windows
│   └── VS_Code_Keyboard_Shortcut_mac.md      # VS Code shortcuts for Mac
│
└── README.md                        # This file
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
- Variable declarations (`var`, `let`, `const`)
- JavaScript identifier rules
- Best practices for naming variables

### Chapter 3: Identifiers, Literals & Developer Tools
- **Naming Conventions:**
  - `camelCase` — variables, functions
  - `PascalCase` — classes, constructors
  - `snake_case` — valid but uncommon in JS
  - `UPPER_SNAKE_CASE` — constants
  - `kebab-case` — invalid in JS identifiers
- **Comments:** Single-line (`//`) and multi-line (`/* */`)
- **Variable Declarations:**
  - `var` — function-scoped, hoisted, redeclarable
  - `let` — block-scoped, not hoisted (TDZ), reassignable
  - `const` — block-scoped, not hoisted, must be initialized
- **Scope:** Function scope vs block scope, variable leaking in loops
- **Hoisting:** Variable hoisting (`undefined`) and function hoisting
- **Functions:** Defining and calling reusable code blocks
- **VS Code Shortcuts:** Complete reference for Windows and Mac

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
