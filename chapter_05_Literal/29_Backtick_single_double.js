// JavaScript supports three ways to write strings:

const name = "Mangesh";

// 1. Single Quote: '...'
const single = 'Hello ' + name + '!';

// 2. Double Quote: "..."
const double = "Hello " + name + "!";

// 3. Backtick (Template Literal): `...`
// Backticks allow you to embed variables directly using ${...}.
const backtick = `Hello ${name}!`;

console.log("Single :", single);
console.log("Double :", double);
console.log("Backtick:", backtick);

// KEY DIFFERENCE:
// Single and Double quotes are identical. Both require the + sign to join variables.
// Backticks allow string interpolation (${variable}) and multi-line strings.


/*
  Feature              |  '' or ""  |  ``
  ---------------------|------------|------------
  Simple text          |     ✓      |   ✓
  Variable injection   |     ✗      |   ✓  -> ${var}
  Multi-line           |     ✗      |   ✓
  Expression inside    |     ✗      |   ✓  -> ${a + b}
*/