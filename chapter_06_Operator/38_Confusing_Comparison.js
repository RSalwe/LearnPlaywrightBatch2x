// ============================================================
// 1. String vs Number Comparisons
// ============================================================
console.log(0 == "");            // true  (empty string coerced to 0)
console.log(0 == "0");           // true  (string "0" coerced to 0)
console.log("" == "0");          // false (Transitivity Broken!)

// ============================================================
// 2. Boolean Comparisons
// ============================================================
console.log(false == 0);         // true  (false coerced to 0)
console.log(false == "");        // true  (false coerced to 0, empty string to 0)
console.log(false == "0");       // true  (both coerce to 0)
console.log(false == null);      // false (no coercion path)
console.log(false == undefined); // false (no coercion path)

// ============================================================
// 3. null and undefined Comparisons
// ============================================================
console.log(null == undefined);  // true  (special loose equality rule)
console.log(null === undefined); // false (strict: different types)
console.log(null == 0);          // false (null does NOT coerce to 0 with ==)
console.log(null == "0");        // false
console.log(undefined == 0);     // false (undefined does NOT coerce to 0)
console.log(undefined == false); // false

// ============================================================
// 4. NaN Comparisons
// ============================================================
console.log(NaN == NaN);         // false (NaN is never equal to anything, even itself)
console.log(NaN === NaN);        // false (strict also false)
console.log(isNaN(NaN));         // true  (use isNaN or Number.isNaN)

// ============================================================
// 5. Array Comparisons
// ============================================================
console.log([] == "");           // true  (array coerced to empty string)
console.log([] == 0);            // true  (empty array coerced to 0)
console.log([0] == false);       // true  ([0] -> "0" -> 0, false -> 0)
console.log([1] == true);        // true  ([1] -> "1" -> 1, true -> 1)
console.log([1, 2] == "1,2");    // true  (array to string)

// ============================================================
// 6. Object Comparisons
// ============================================================
console.log({} == "[object Object]"); // true  (object to string)
console.log({} == {});           // false (different object references)
console.log({} === {});          // false (strict, different references)

// ============================================================
// 7. Whitespace String Comparisons
// ============================================================
console.log("\t\n" == 0);       // true  (whitespace string coerced to 0)
console.log("\t\n" == false);   // true  (both coerce to 0)

// ============================================================
// 8. true Comparisons
// ============================================================
console.log(true == 1);          // true  (true coerced to 1)
console.log(true == "1");        // true  ("1" coerced to 1)
console.log(true == 2);          // false (true -> 1, 2 != 1)

// ============================================================
// 9. Loose vs Strict Equality
// ============================================================
console.log(1 == "1");           // true  (loose coercion)
console.log(1 === "1");          // false (strict: number vs string)
console.log(1 == true);          // true  (loose)
console.log(1 === true);         // false (strict: number vs boolean)

// ============================================================
// 10. typeof Results (Common Surprises)
// ============================================================
console.log(typeof null);            // "object"  (historical bug in JS)
console.log(typeof []);              // "object"  (arrays are objects)
console.log(typeof {});              // "object"
console.log(typeof NaN);             // "number"  (despite meaning Not-a-Number)
console.log(typeof Infinity);        // "number"
console.log(typeof undefined);       // "undefined"
console.log(typeof true);            // "boolean"
console.log(typeof 42);              // "number"
console.log(typeof 42n);             // "bigint"
console.log(typeof "hello");         // "string"
console.log(typeof Symbol("x"));     // "symbol"
console.log(typeof function(){});    // "function" (only callable type)
console.log(typeof (() => {}));      // "function" (arrow functions too)
console.log(typeof /regex/);         // "object" (older browsers) or "object" (modern)
console.log(typeof new Date());      // "object"
console.log(typeof new Map());       // "object"
console.log(typeof new Set());       // "object"
