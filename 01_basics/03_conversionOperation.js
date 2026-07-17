// ==============================
// Type Conversion in JavaScript
// ==============================

// null is an object-like primitive value
let score = null;

// Check the datatype of score
console.log(typeof score); // "object"

// Convert score into a Number
let valueInNumber = Number(score);

// Check the datatype after conversion
console.log(typeof valueInNumber); // "number"

// null converts to 0
console.log(valueInNumber); // 0

// Common Number() conversions:
// "33"     => 33
// "33abc"  => NaN (Not a Number)
// true     => 1
// false    => 0
// null     => 0
// undefined => NaN

// ==============================
// Boolean Conversion
// ==============================

let isLoggedIn = 1;

// Convert the value into Boolean
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn); // true

// Boolean() conversions:
// 1       => true
// 0       => false
// ""      => false (empty string)
// "ram"   => true (non-empty string)
// null    => false
// undefined => false

// ==============================
// String Conversion
// ==============================

let someNumber = 33;

// Convert number into string
let stringNumber = String(someNumber);

console.log(stringNumber); // "33"
console.log(typeof stringNumber); // string

// ==============================
// Arithmetic Operations
// ==============================

let value = 3;

// Unary minus converts positive to negative
let negValue = -value;

console.log(negValue); // -3

// Basic arithmetic operators
console.log(2 + 2); // Addition
console.log(2 - 2); // Subtraction
console.log(2 * 2); // Multiplication
console.log(2 ** 2); // Exponentiation (2² = 4)
console.log(2 / 3); // Division
console.log(2 % 2); // Modulus (Remainder)

// ==============================
// String Concatenation
// ==============================

let str1 = "Hello";
let str2 = "Ram";

// Join two strings
let str3 = str1 + str2;

console.log(str3); // HelloRam

// ==============================
// Addition with Strings
// ==============================

// If a string is involved, JavaScript usually converts numbers to strings.

console.log("1" + 2);      // "12"
console.log(1 + "2");      // "12"
console.log("1" + 2 + 2);  // "122"
console.log(1 + "2" + 2);  // "122"
console.log(1 + 2 + "2");  // "32"

// Explanation:
// 1 + 2 = 3
// 3 + "2" = "32"

// ==============================
// Operator Precedence
// ==============================

// Parentheses execute first
console.log((2 + 3) * 5 % 3);

// (2 + 3) = 5
// 5 * 5 = 25
// 25 % 3 = 1

// ==============================
// Unary Plus (+)
// ==============================

// Unary plus converts values into numbers

console.log(+true); // 1
console.log(+"");   // 0

// Examples:
// +"123"  => 123
// +false  => 0

// ==============================
// Increment Operator
// ==============================

let gameCounter = 100;

// Post-increment
gameCounter++;

console.log(gameCounter); // 101

// Same as:
// gameCounter = gameCounter + 1

// ==============================
// Pre-Increment vs Post-Increment
// ==============================

let a, x, y;

a = 5;

// Post-increment:
// Assign current value first, then increase
x = a++; // x = 5, a = 6

// Pre-increment:
// Increase first, then assign
y = ++a; // a = 7, y = 7

// Final values
console.log(a); // 7
console.log(x); // 5
console.log(y); // 7

// Summary:
// a++  -> Use current value, then increment
// ++a  -> Increment first, then use new value