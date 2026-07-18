// -------------------------------------
// Truthy and Falsy Values
// -------------------------------------

// const userEmail = "triggeredinsan.com";
const userEmail = [];

// JavaScript automatically converts values to true or false
// when they are used inside conditions.

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// -------------------------------------
// Falsy Values
// -------------------------------------

// These values are considered false:
//
// false
// 0
// -0
// 0n (BigInt zero)
// ""
// null
// undefined
// NaN


// -------------------------------------
// Truthy Values
// -------------------------------------

// These values are considered true:
//
// "0"
// "false"
// " " (string containing a space)
// []
// {}
// function() {}


// -------------------------------------
// Checking if an Array is Empty
// -------------------------------------

// Empty arrays are truthy, so check their length.
if (userEmail.length === 0) {
    console.log("Array is empty");
}


// -------------------------------------
// Checking if an Object is Empty
// -------------------------------------

const emptyObj = {};

// Object.keys() returns an array of object keys.
// If the array length is 0, the object is empty.
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// -------------------------------------
// Nullish Coalescing Operator (??)
// -------------------------------------

// Returns the first value that is NOT null or undefined.

let val1;

// val1 = 5 ?? 10;              // 5
// val1 = null ?? 10;           // 10
// val1 = undefined ?? 15;      // 15
// val1 = null ?? 10 ?? 20;     // 10

val1 = null ?? undefined ?? 20;

console.log(val1); // Output: 20


// -------------------------------------
// Ternary Operator
// -------------------------------------

// A concise way to write a simple if...else expression.


// Syntax:
// condition ? expression_if_true : expression_if_false;

const iceTeaPrice = 100;

iceTeaPrice <= 80
    ? console.log("Less than 80")
    : console.log("More than 80");