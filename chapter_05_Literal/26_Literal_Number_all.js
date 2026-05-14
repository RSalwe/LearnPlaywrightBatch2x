// ============================================================================
// JavaScript Literal Numbers and Number Types
// ============================================================================

// ----------------------------------------------------------------------------
// 1. DECIMAL (Base 10) — The standard number format
// ----------------------------------------------------------------------------
const decimalInteger = 42;
const decimalFloat = 3.14;
const negativeDecimal = -99;
const leadingZeroDecimal = 0.5;
const trailingDecimal = 5.0; // Treated as 5

console.log("Decimal Integer:", decimalInteger);     // 42
console.log("Decimal Float:", decimalFloat);         // 3.14

// ----------------------------------------------------------------------------
// 2. BINARY (Base 2) — Prefix: 0b or 0B
// ----------------------------------------------------------------------------
const binary = 0b1010;  // 10 in decimal
const binaryUpper = 0B1111; // 15 in decimal

console.log("Binary 0b1010:", binary);               // 10

// ----------------------------------------------------------------------------
// 3. OCTAL (Base 8) — Prefix: 0o or 0O
// NOTE: Old-style octal with leading 0 (e.g., 010) is deprecated in strict mode.
// ----------------------------------------------------------------------------
const octal = 0o17;     // 15 in decimal
const octalUpper = 0O10; // 8 in decimal

console.log("Octal 0o17:", octal);                     // 15

// ----------------------------------------------------------------------------
// 4. HEXADECIMAL (Base 16) — Prefix: 0x or 0X
// ----------------------------------------------------------------------------
const hex = 0xFF;       // 255 in decimal
const hexUpper = 0X1A;  // 26 in decimal

console.log("Hex 0xFF:", hex);                         // 255

// ----------------------------------------------------------------------------
// 5. SCIENTIFIC (EXPONENTIAL) NOTATION
// ----------------------------------------------------------------------------
const scientific1 = 1e5;    // 100000
const scientific2 = 2.5e-3; // 0.0025
const scientific3 = 3.5E+2; // 350

console.log("Scientific 1e5:", scientific1);           // 100000
console.log("Scientific 2.5e-3:", scientific2);       // 0.0025

// ----------------------------------------------------------------------------
// 6. SEPARATORS (Numeric Separators — ES2021)
// Use underscores to improve readability of large numbers.
// ----------------------------------------------------------------------------
const million = 1_000_000;
const binaryWithSep = 0b1010_0001;
const hexWithSep = 0xFF_FF;

console.log("Separator 1_000_000:", million);        // 1000000

// ----------------------------------------------------------------------------
// 7. BIGINT — For arbitrarily large integers
// Suffix the number with 'n'
// ----------------------------------------------------------------------------
const bigIntLiteral = 9007199254740993n;
const bigFromHex = 0x20000000000003n;
const bigFromBinary = 0b100000000000000000000000000000000000000000000000000011n;

console.log("BigInt:", bigIntLiteral);                 // 9007199254740993n
console.log("Type of BigInt:", typeof bigIntLiteral);  // "bigint"

// ----------------------------------------------------------------------------
// 8. SPECIAL NUMBER VALUES
// ----------------------------------------------------------------------------

// --- Infinity & -Infinity ---
const posInfinity = Infinity;
const negInfinity = -Infinity;
const divByZero = 1 / 0;

console.log("Infinity:", posInfinity);                 // Infinity
console.log("-Infinity:", negInfinity);                // -Infinity
console.log("1 / 0:", divByZero);                     // Infinity

// --- NaN (Not-a-Number) ---
const notANumber = NaN;
const invalidMath = 0 / 0;
const parseFail = Number("hello");

console.log("NaN:", notANumber);                     // NaN
console.log("0 / 0:", invalidMath);                   // NaN
console.log("Number('hello'):", parseFail);           // NaN

// IMPORTANT: NaN is the only value in JavaScript that is NOT equal to itself.
console.log("NaN === NaN:", NaN === NaN);             // false
console.log("isNaN('hello'):", isNaN("hello"));       // true
console.log("Number.isNaN('hello'):", Number.isNaN("hello")); // false (does not coerce)

// ----------------------------------------------------------------------------
// 9. NUMBER OBJECT PROPERTIES
// ----------------------------------------------------------------------------
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);                  // 1.7976931348623157e+308
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);                  // 5e-324
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);    // 9007199254740991
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);    // -9007199254740991
console.log("Number.EPSILON:", Number.EPSILON);                      // 2.220446049250313e-16
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);  // Infinity
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);  // -Infinity
console.log("Number.NaN:", Number.NaN);                              // NaN

// ----------------------------------------------------------------------------
// 10. UNDER THE HOOD
// ----------------------------------------------------------------------------
// In JavaScript, ALL regular numbers (not BigInt) are stored as
// 64-bit floating point values following the IEEE 754 standard.
// This is commonly known as "double precision".
//
// Range of safe integers: -9007199254740991 to 9007199254740991
// Beyond this, precision may be lost.
// ----------------------------------------------------------------------------

console.log("\n--- Summary Table ---");
console.log("Decimal      :", 42);
console.log("Binary       :", 0b1010, "(0b1010)");
console.log("Octal        :", 0o17, "(0o17)");
console.log("Hexadecimal  :", 0xFF, "(0xFF)");
console.log("Scientific   :", 1e3, "(1e3)");
console.log("BigInt       :", 12345678901234567890n, "(ends with n)");
console.log("Infinity     :", Infinity);
console.log("NaN          :", NaN);
