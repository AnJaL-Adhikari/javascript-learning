const score = 400
  

const balance = new Number(100)  // Creates a Number object with the value 100.
console.log(typeof balance)

console.log(balance.toString().length) // Converts the value to a string and returns its length.
console.log(typeof balance)

console.log(balance.toFixed(2))     // Formats the number with fixed decimal places.

const otherNumber = 1123.8966
console.log(otherNumber.toPrecision(4));  // Formats the number with the specified number of significant digits.

const hundreds = 1000000
console.log(hundreds.toLocaleString())    // Converts the number into a readable string format with commas.

console.log(hundreds.toLocaleString('en-IN')) // Formats the number using the Indian number system / Nepali  (lakh/crore format).


// +++++++++++++++++++++++++++  Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Displays the Math object containing built-in mathematical methods and constants.
console.log(Math);

// Returns the absolute value of a number (removes the negative sign).
console.log(Math.abs(-4));

console.log(Math.round(4.3))  // Rounds the number to the nearest integer.
console.log(Math.round(4.6))

console.log(Math.ceil(2.3))  // Rounds numbers up to the nearest integer using ceil() and down to the nearest integer using floor().
console.log(Math.floor(2.3))

console.log(Math.sqrt(144)) //Returns the square root of the given number

console.log(Math.random())  // Generates and returns a random decimal number between 0 (inclusive) and 1 (exclusive).

console.log((Math.random() * 10) + 1)    // Generates a random number between 1 and 10.

console.log(Math.floor(Math.random() * 10))   // Generates a random whole number between 0 and 9.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // Generates a random whole number between the minimum and maximum values.