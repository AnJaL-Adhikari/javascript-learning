// ==============================
// Comparison Operators
// ==============================

// Basic numeric comparisons
console.log(2 > 1);   // true  -> 2 is greater than 1
console.log(2 >= 1);  // true  -> 2 is greater than or equal to 1
console.log(2 < 1);   // false -> 2 is not less than 1
console.log(2 == 1);  // false -> Values are not equal
console.log(2 != 1);  // true  -> Values are different

// ==============================
// String vs Number Comparison
// ==============================

// During comparison, JavaScript converts the string to a number.
console.log("2" > 1);   // true  -> "2" becomes 2
console.log("02" > 1);  // true  -> "02" becomes 2

// ==============================
// Comparing null
// ==============================

// These results can be confusing because JavaScript
// treats null differently for equality (==) and
// relational comparisons (<, >, <=, >=).

console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

// Explanation:
// null is converted to 0 only for relational comparisons.
// So:
// null > 0   -> 0 > 0  -> false
// null >= 0  -> 0 >= 0 -> true
// But null == 0 is false because equality (==)
// follows different rules.

// ==============================
// Comparing undefined
// ==============================

// undefined does not convert to a valid number
// in comparisons, so all of these are false.

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// ==============================
// == vs ===
// ==============================

// == (Loose Equality)
// - Compares values only.
// - Performs automatic type conversion (type coercion).

console.log("2" == 2); // true

// === (Strict Equality)
// - Compares both value and datatype.
// - No type conversion is performed.

console.log("2" === 2); // false

// Summary:
// ==  -> Checks value after type conversion.
// === -> Checks both value and datatype (recommended).