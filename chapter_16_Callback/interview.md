# JavaScript Interview Questions - Complete Guide (Chapters 1-16)

## Table of Contents
- [Chapter 1: Basics](#chapter-1-basics)
- [Chapter 2: JavaScript Concepts](#chapter-2-javascript-concepts)
- [Chapter 3: Identifiers, Comments & Tools](#chapter-3-identifiers-comments--tools)
- [Chapter 4: Variables, Scope & Hoisting](#chapter-4-variables-scope--hoisting)
- [Chapter 5: Literals](#chapter-5-literals)
- [Chapter 6: Operators](#chapter-6-operators)
- [Chapter 7: Conditional Statements](#chapter-7-conditional-statements)
- [Chapter 8: Switch Statements](#chapter-8-switch-statements)
- [Chapter 9: User Input](#chapter-9-user-input)
- [Chapter 10: Loops](#chapter-10-loops)
- [Chapter 11: Arrays](#chapter-11-arrays)
- [Chapter 12: Functions](#chapter-12-functions)
- [Chapter 13: Strings](#chapter-13-strings)
- [Chapter 15: 2D Arrays](#chapter-15-2d-arrays)
- [Chapter 16: Callbacks](#chapter-16-callbacks)

---

## Chapter 1: Basics

### Q1. What is JavaScript?
**Answer:** JavaScript is a lightweight, interpreted programming language that is used to make web pages interactive. It can run both in the browser and on the server (Node.js).

### Q2. How do you run a JavaScript file using Node.js?
**Answer:** Use the command `node filename.js` in the terminal.

### Q3. What is `console.log()` used for?
**Answer:** `console.log()` is used to print output to the console for debugging and displaying information.

### Q4. What is Node.js?
**Answer:** Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser, typically on servers.

### Q5. What is the difference between Java and JavaScript?
**Answer:** Java is a compiled, statically-typed language that runs on the JVM. JavaScript is an interpreted, dynamically-typed language that runs in browsers and Node.js. They are completely different languages.

### Q6. How do you check if Node.js is installed?
**Answer:** Run `node -v` or `node --version` in the terminal.

### Q7. What is the file extension for JavaScript files?
**Answer:** `.js`

---

## Chapter 2: JavaScript Concepts

### Q8. What is a variable in JavaScript?
**Answer:** A variable is a container for storing data values that can be referenced and manipulated in a program.

### Q9. What is the difference between `var`, `let`, and `const`?
**Answer:** 
- `var`: Function-scoped, can be redeclared, hoisted
- `let`: Block-scoped, cannot be redeclared, hoisted to TDZ
- `const`: Block-scoped, cannot be redeclared or reassigned, hoisted to TDZ

### Q10. What are the rules for naming identifiers in JavaScript?
**Answer:**
- Must start with a letter, underscore (_), or dollar sign ($)
- Cannot start with a number
- Cannot use reserved keywords
- Case-sensitive

### Q11. What is camelCase?
**Answer:** camelCase is a naming convention where the first word is lowercase and subsequent words are capitalized (e.g., `myVariableName`).

### Q12. What is PascalCase?
**Answer:** PascalCase is a naming convention where each word starts with a capital letter (e.g., `MyClassName`).

### Q13. What is snake_case?
**Answer:** snake_case is a naming convention where words are separated by underscores and typically lowercase (e.g., `my_variable_name`).

---

## Chapter 3: Identifiers, Comments & Tools

### Q14. What are the two types of comments in JavaScript?
**Answer:**
- Single-line: `// comment`
- Multi-line: `/* comment */`

### Q15. What is the purpose of comments?
**Answer:** Comments are used to explain code, make it more readable, and prevent execution of code during testing.

### Q16. What is VS Code?
**Answer:** VS Code (Visual Studio Code) is a free, open-source code editor developed by Microsoft with features like IntelliSense, debugging, and Git integration.

### Q17. What is the keyboard shortcut to comment/uncomment a line in VS Code (Windows)?
**Answer:** `Ctrl + /`

### Q18. What is the keyboard shortcut to open the terminal in VS Code?
**Answer:** `` Ctrl + ` `` (backtick)

### Q19. What is Emmet?
**Answer:** Emmet is a plugin that provides shortcuts for writing HTML and CSS code quickly.

### Q20. What is kebab-case and why is it invalid in JavaScript identifiers?
**Answer:** kebab-case uses hyphens between words (e.g., `my-variable`). It's invalid in JavaScript because the hyphen is interpreted as a subtraction operator.

---

## Chapter 4: Variables, Scope & Hoisting

### Q21. What is variable hoisting?
**Answer:** Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.

### Q22. What is the Temporal Dead Zone (TDZ)?
**Answer:** TDZ is the period between entering a scope and the actual declaration of `let` and `const` variables, where accessing them throws a ReferenceError.

### Q23. What is the output of: `console.log(x); var x = 5;`?
**Answer:** `undefined` - because `var` is hoisted and initialized with `undefined`.

### Q24. What is the output of: `console.log(x); let x = 5;`?
**Answer:** ReferenceError - because `let` is hoisted to TDZ but not initialized.

### Q25. What is function scope?
**Answer:** Function scope means variables declared with `var` are accessible throughout the entire function they are declared in.

### Q26. What is block scope?
**Answer:** Block scope means variables declared with `let` and `const` are only accessible within the block (curly braces) they are declared in.

### Q27. Can you redeclare a `let` variable?
**Answer:** No, redeclaring a `let` variable in the same scope throws a SyntaxError.

### Q28. Can you reassign a `const` variable?
**Answer:** No, `const` variables cannot be reassigned. However, objects and arrays declared with `const` can have their contents modified.

### Q29. What happens when you declare a function?
**Answer:** Function declarations are hoisted completely, meaning they can be called before their declaration in the code.

### Q30. What is variable leaking?
**Answer:** Variable leaking occurs when a variable declared without `var`, `let`, or `const` becomes a global variable automatically.

---

## Chapter 5: Literals

### Q31. What is the difference between `null` and `undefined`?
**Answer:**
- `undefined`: Variable declared but not assigned a value
- `null`: Intentional absence of value, assigned by programmer

### Q32. What is the output of `typeof null`?
**Answer:** `"object"` - this is a known bug in JavaScript that has been kept for backward compatibility.

### Q33. What is BigInt?
**Answer:** BigInt is a numeric data type that can represent integers with arbitrary precision, created by appending `n` to a number (e.g., `123n`).

### Q34. How do you write a binary number in JavaScript?
**Answer:** Prefix with `0b` (e.g., `0b1010` represents 10 in decimal).

### Q35. How do you write a hexadecimal number in JavaScript?
**Answer:** Prefix with `0x` (e.g., `0xFF` represents 255 in decimal).

### Q36. What is a template literal?
**Answer:** Template literals are strings enclosed in backticks (`` ` ``) that allow embedded expressions using `${}` and multi-line strings.

### Q37. What is the difference between single quotes, double quotes, and backticks for strings?
**Answer:**
- Single/double quotes: Same functionality, no variable interpolation
- Backticks: Support template literals with `${}` interpolation and multi-line strings

### Q38. What is `Infinity` in JavaScript?
**Answer:** `Infinity` is a numeric value representing positive infinity, resulting from operations like division by zero.

### Q39. What is `NaN`?
**Answer:** `NaN` (Not-a-Number) is a special numeric value representing an invalid or unreliable result from a numeric operation.

### Q40. What is the output of `typeof NaN`?
**Answer:** `"number"` - NaN is technically a number type, just an invalid one.

---

## Chapter 6: Operators

### Q41. What is the difference between `==` and `===`?
**Answer:**
- `==` (loose equality): Compares values after type coercion
- `===` (strict equality): Compares values and types without coercion

### Q42. What is the output of `5 == "5"`?
**Answer:** `true` - string "5" is coerced to number 5 before comparison.

### Q43. What is the output of `5 === "5"`?
**Answer:** `false` - different types (number vs string).

### Q44. What is the modulo operator?
**Answer:** `%` returns the remainder of a division (e.g., `10 % 3` equals `1`).

### Q45. What is the exponentiation operator?
**Answer:** `**` raises the left operand to the power of the right operand (e.g., `2 ** 3` equals `8`).

### Q46. What is the nullish coalescing operator (`??`)?
**Answer:** `??` returns the right operand only if the left is `null` or `undefined`, otherwise returns the left operand.

### Q47. What is the difference between `||` and `??`?
**Answer:** `||` returns right operand for any falsy value (0, "", false, null, undefined, NaN). `??` only returns right operand for `null` or `undefined`.

### Q48. What is short-circuit evaluation?
**Answer:** Logical operators (`&&`, `||`) stop evaluating as soon as the result is determined.

### Q49. What is the output of `0 && "hello"`?
**Answer:** `0` - `&&` returns the first falsy value it encounters.

### Q50. What is the output of `"" || "default"`?
**Answer:** `"default"` - `||` returns the first truthy value.

### Q51. What is the difference between prefix and postfix increment?
**Answer:**
- Prefix (`++x`): Increments first, then returns the new value
- Postfix (`x++`): Returns the current value, then increments

### Q52. What is the output of: `let x = 5; console.log(x++); console.log(x);`?
**Answer:** `5` then `6` - postfix returns value before increment.

### Q53. What is the output of: `let x = 5; console.log(++x);`?
**Answer:** `6` - prefix increments before returning.

### Q54. What is the output of `[] == 0`?
**Answer:** `true` - empty array is coerced to empty string, then to 0.

### Q55. What is the output of `[] === 0`?
**Answer:** `false` - different types (object vs number).

---

## Chapter 7: Conditional Statements

### Q56. What is the syntax of an if-else statement?
**Answer:**
```javascript
if (condition) {
    // code if true
} else {
    // code if false
}
```

### Q57. Can you have multiple else-if blocks?
**Answer:** Yes, you can chain multiple `else if` conditions to check multiple scenarios.

### Q58. What is the difference between `if-else` and ternary operator?
**Answer:** Ternary operator (`condition ? value1 : value2`) is a shorthand for simple if-else statements and returns a value.

### Q59. What happens if the condition in an if statement is falsy?
**Answer:** The code block inside the if statement is skipped.

### Q60. What are falsy values in JavaScript?
**Answer:** `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`, `0n` (BigInt zero).

### Q61. What is the output of `if ("") { console.log("yes"); }`?
**Answer:** Nothing - empty string is falsy, so the block doesn't execute.

### Q62. How do you check if a number is even or odd?
**Answer:** Use modulo operator: `num % 2 === 0` for even, `num % 2 !== 0` for odd.

### Q63. What is a nested if statement?
**Answer:** An if statement inside another if statement, used for checking multiple conditions.

---

## Chapter 8: Switch Statements

### Q64. What is a switch statement used for?
**Answer:** Switch statements are used for multi-way branching based on the value of an expression.

### Q65. What is fall-through behavior in switch?
**Answer:** Without `break`, execution continues to the next case regardless of the value match.

### Q66. What is the purpose of the `default` case?
**Answer:** The `default` case executes when no other case matches the expression value.

### Q67. Can you group multiple cases together?
**Answer:** Yes, multiple cases can share the same code block by omitting `break` between them.

### Q68. What data types can be used in switch cases?
**Answer:** Numbers, strings, and expressions that evaluate to a value (strict equality comparison).

### Q69. What is the difference between `switch` and `if-else-if`?
**Answer:** Switch is cleaner for multiple equality checks on one variable; if-else-if is more flexible for complex conditions.

---

## Chapter 9: User Input

### Q70. How do you get user input in Node.js?
**Answer:** Using the `readline` module or third-party packages like `prompt-sync`.

### Q71. What is the difference between synchronous and asynchronous input?
**Answer:** Synchronous input blocks execution until input is received; asynchronous input allows other code to run while waiting.

### Q72. What is `prompt-sync`?
**Answer:** A Node.js package that provides synchronous user input functionality.

---

## Chapter 10: Loops

### Q73. What are the three main types of loops in JavaScript?
**Answer:** `for`, `while`, and `do...while` loops.

### Q74. What is the syntax of a for loop?
**Answer:**
```javascript
for (initialization; condition; increment) {
    // code
}
```

### Q75. What is the difference between `while` and `do...while`?
**Answer:** `while` checks condition before execution; `do...while` executes at least once before checking condition.

### Q76. What is the output of `for (let i = 0; i < 3; i++) { console.log(i); }`?
**Answer:** `0`, `1`, `2` - prints values 0 through 2.

### Q77. What is an infinite loop?
**Answer:** A loop that never terminates because its condition never becomes false.

### Q78. How do you break out of a loop?
**Answer:** Using the `break` statement.

### Q79. How do you skip to the next iteration?
**Answer:** Using the `continue` statement.

### Q80. What is the difference between `for...of` and `for...in`?
**Answer:**
- `for...of`: Iterates over values (arrays, strings, iterables)
- `for...in`: Iterates over keys (object properties, array indices)

---

## Chapter 11: Arrays

### Q81. What is an array in JavaScript?
**Answer:** An array is an ordered collection of values that can hold multiple data types.

### Q82. How do you create an empty array?
**Answer:** `let arr = []` or `let arr = new Array()`.

### Q83. What is the difference between `push()` and `unshift()`?
**Answer:**
- `push()`: Adds elements to the end
- `unshift()`: Adds elements to the beginning

### Q84. What is the difference between `pop()` and `shift()`?
**Answer:**
- `pop()`: Removes and returns the last element
- `shift()`: Removes and returns the first element

### Q85. What does `splice()` do?
**Answer:** `splice()` can add, remove, or replace elements at any position in an array.

### Q86. What is the difference between `slice()` and `splice()`?
**Answer:**
- `slice()`: Returns a new array (non-mutating), extracts portion
- `splice()`: Modifies original array, can insert/delete/replace

### Q87. What does `map()` do?
**Answer:** `map()` creates a new array by applying a function to each element of the original array.

### Q88. What does `filter()` do?
**Answer:** `filter()` creates a new array with elements that pass a test (return true from the callback).

### Q89. What does `reduce()` do?
**Answer:** `reduce()` reduces an array to a single value by executing a reducer function on each element.

### Q90. What is the difference between `find()` and `filter()`?
**Answer:**
- `find()`: Returns the first matching element
- `filter()`: Returns an array of all matching elements

### Q91. What does `includes()` do?
**Answer:** `includes()` checks if an array contains a specific value and returns true/false.

### Q92. What is the difference between `indexOf()` and `findIndex()`?
**Answer:**
- `indexOf()`: Finds value using strict equality
- `findIndex()`: Finds element based on a test function

### Q93. What does `Array.isArray()` do?
**Answer:** Returns `true` if the value is an array, `false` otherwise.

### Q94. What is a sparse array?
**Answer:** An array with empty slots (e.g., `new Array(3)` creates `[empty × 3]`).

### Q95. Why do `map()` and `forEach()` skip empty slots in sparse arrays?
**Answer:** They only iterate over actual values, not empty slots.

---

## Chapter 12: Functions

### Q96. What is a function in JavaScript?
**Answer:** A function is a reusable block of code that performs a specific task and can accept inputs and return outputs.

### Q97. What are the four types of functions based on parameters and return?
**Answer:**
1. No parameters, no return
2. With parameters, no return
3. No parameters, with return
4. With parameters and return

### Q98. What is a function expression?
**Answer:** Assigning a function to a variable: `const myFunc = function() { };`

### Q99. What is an arrow function?
**Answer:** A concise syntax for writing functions: `const add = (a, b) => a + b;`

### Q100. What is the difference between arrow functions and regular functions?
**Answer:**
- Arrow functions don't have their own `this`
- Arrow functions cannot be used as constructors
- Arrow functions don't have `arguments` object
- More concise syntax

### Q101. What is an IIFE?
**Answer:** Immediately Invoked Function Expression - a function that runs immediately after being defined: `(function() { })();`

### Q102. What are default parameters?
**Answer:** Parameters with preset values that are used when no argument is passed: `function greet(name = "Guest") { }`

### Q103. What are rest parameters?
**Answer:** Syntax to accept indefinite number of arguments as an array: `function sum(...numbers) { }`

### Q104. What is the spread operator?
**Answer:** `...` expands an array into individual elements: `Math.max(...[1, 2, 3])` becomes `Math.max(1, 2, 3)`.

### Q105. What is a closure?
**Answer:** A closure is a function that remembers and accesses variables from its outer scope even after the outer function has finished executing.

### Q106. What is a higher-order function?
**Answer:** A function that takes another function as an argument or returns a function.

### Q107. What is a pure function?
**Answer:** A function that always returns the same output for the same input and has no side effects.

### Q108. What is an impure function?
**Answer:** A function that depends on external state or produces side effects (modifies external variables, I/O operations).

### Q109. What is the difference between global and local scope?
**Answer:**
- Global scope: Accessible throughout the entire program
- Local scope: Accessible only within the function or block where declared

### Q110. Can you call a function before declaring it?
**Answer:** Yes, for function declarations (hoisted). No, for function expressions and arrow functions.

---

## Chapter 13: Strings

### Q111. What are the three ways to create strings in JavaScript?
**Answer:** Single quotes (`'`), double quotes (`"`), and backticks (`` ` ``).

### Q112. How do you get the length of a string?
**Answer:** Using the `.length` property: `"hello".length` returns `5`.

### Q113. What is the difference between `charAt()` and bracket notation `[]`?
**Answer:** Both access characters, but `charAt()` returns empty string for out-of-bounds while `[]` returns `undefined`.

### Q114. What does `slice()` do for strings?
**Answer:** Extracts a portion of a string and returns a new string (supports negative indices).

### Q115. What is the difference between `slice()` and `substring()`?
**Answer:**
- `slice()`: Supports negative indices
- `substring()`: Treats negative indices as 0, swaps arguments if start > end

### Q116. What does `includes()` do for strings?
**Answer:** Checks if a string contains a substring and returns true/false.

### Q117. What does `startsWith()` do?
**Answer:** Checks if a string begins with a specified substring.

### Q118. What does `endsWith()` do?
**Answer:** Checks if a string ends with a specified substring.

### Q119. What does `trim()` do?
**Answer:** Removes whitespace from both ends of a string.

### Q120. What is the difference between `replace()` and `replaceAll()`?
**Answer:**
- `replace()`: Replaces only the first occurrence (or use regex with `/g` flag)
- `replaceAll()`: Replaces all occurrences (ES2021+)

### Q121. What does `split()` do?
**Answer:** Splits a string into an array based on a delimiter: `"a,b,c".split(",")` returns `["a", "b", "c"]`.

### Q122. What does `join()` do?
**Answer:** Joins array elements into a string: `["a", "b", "c"].join("-")` returns `"a-b-c"`.

### Q123. What is the difference between `toString()` and `String()`?
**Answer:** Both convert to string, but `String()` handles `null` and `undefined` better (returns `"null"` and `"undefined"` instead of throwing error).

---

## Chapter 15: 2D Arrays

### Q124. What is a 2D array?
**Answer:** A 2D array is an array of arrays, representing a matrix or grid structure with rows and columns.

### Q125. How do you create a 2D array?
**Answer:**
```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

### Q126. How do you access an element in a 2D array?
**Answer:** Using two indices: `matrix[row][column]` (e.g., `matrix[0][1]` gets the element at row 0, column 1).

### Q127. How do you iterate over a 2D array?
**Answer:** Using nested loops:
```javascript
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```

### Q128. What is the difference between `new Array(3)` and `[undefined, undefined, undefined]`?
**Answer:**
- `new Array(3)`: Creates a sparse array with 3 empty slots
- `[undefined, undefined, undefined]`: Creates an array with 3 actual undefined values

### Q129. How do you create a 2D array filled with zeros?
**Answer:**
```javascript
let rows = 3, cols = 3;
let matrix = Array.from({length: rows}, () => Array(cols).fill(0));
```

### Q130. What is the transpose of a matrix?
**Answer:** The transpose swaps rows and columns: element at `[i][j]` moves to `[j][i]`.

---

## Chapter 16: Callbacks

### Q131. What is a callback function?
**Answer:** A callback function is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of action.

### Q132. What is synchronous callback?
**Answer:** A callback that executes immediately within the function call, before the function returns.

### Q133. What is asynchronous callback?
**Answer:** A callback that executes after some asynchronous operation completes (e.g., setTimeout, API calls).

### Q134. What is callback hell (pyramid of doom)?
**Answer:** Callback hell occurs when multiple nested callbacks make code difficult to read and maintain, forming a pyramid-like structure.

### Q135. How do you avoid callback hell?
**Answer:**
- Use named functions instead of anonymous
- Use Promises
- Use async/await
- Modularize code

### Q136. What is the purpose of `setTimeout()`?
**Answer:** `setTimeout()` executes a function after a specified delay in milliseconds.

### Q137. What is the purpose of `setInterval()`?
**Answer:** `setInterval()` repeatedly executes a function at specified intervals.

### Q138. What is the difference between `setTimeout()` and `setInterval()`?
**Answer:**
- `setTimeout()`: Runs once after delay
- `setInterval()`: Runs repeatedly at intervals until cleared

### Q139. How do you stop a `setInterval()`?
**Answer:** Using `clearInterval(intervalId)` where `intervalId` is the value returned by `setInterval()`.

### Q140. What is the event loop?
**Answer:** The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the system kernel whenever possible.

---

## Bonus Questions

### Q141. What is the output of `console.log(typeof [])`?
**Answer:** `"object"` - arrays are objects in JavaScript.

### Q142. What is the output of `console.log([] + [])`?
**Answer:** `""` (empty string) - both arrays are converted to empty strings and concatenated.

### Q143. What is the output of `console.log([] + {})`?
**Answer:** `"[object Object]"` - empty array becomes empty string, object becomes its string representation.

### Q144. What is the output of `console.log({} + [])`?
**Answer:** `0` - in some contexts, `{}` is interpreted as an empty block, leaving `+[]` which coerces to 0.

### Q145. What is the output of `console.log(true + true)`?
**Answer:** `2` - booleans are coerced to numbers (true = 1, false = 0).

### Q146. What is the output of `console.log(1 < 2 < 3)`?
**Answer:** `true` - evaluated as `(1 < 2) < 3` → `true < 3` → `1 < 3` → `true`.

### Q147. What is the output of `console.log(3 > 2 > 1)`?
**Answer:** `false` - evaluated as `(3 > 2) > 1` → `true > 1` → `1 > 1` → `false`.

### Q148. What is the output of `console.log(0.1 + 0.2 === 0.3)`?
**Answer:** `false` - floating-point precision issues in JavaScript.

### Q149. What is the output of `console.log(2 + "2")`?
**Answer:** `"22"` - number is coerced to string for concatenation.

### Q150. What is the output of `console.log(2 - "2")`?
**Answer:** `0` - string is coerced to number for subtraction.

---

## Quick Reference Table

| Concept | Key Points |
|---------|------------|
| `var` | Function-scoped, hoisted, can redeclare |
| `let` | Block-scoped, hoisted to TDZ, cannot redeclare |
| `const` | Block-scoped, hoisted to TDZ, cannot redeclare/reassign |
| `==` vs `===` | Loose vs strict equality |
| `null` vs `undefined` | Intentional absence vs uninitialized |
| `for...of` | Iterate over values |
| `for...in` | Iterate over keys |
| Arrow functions | No own `this`, concise syntax |
| Closures | Access outer scope after outer function returns |
| Callbacks | Functions passed as arguments |

---

*Happy Interview Preparation! 🎉*
