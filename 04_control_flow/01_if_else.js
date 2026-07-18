// Simple if statement


const isUserLoggedIn = true;   // Boolean value (not used in this example)
const temperature = 50;

// Executes only if the condition is true
if (temperature < 50) {
    console.log("Temperature is less than 50");
}

// This line is outside the if block, so it always executes
console.log("Temperature is more than 50");


// -----------------------------
// if...else statement
// -----------------------------

// If the condition is true, the if block runs.
// Otherwise, the else block runs.
if (temperature < 50) {
    console.log("Temperature is less than 50");
} else {
    console.log("Temperature is more than 50");
}


// Block Scope Example


const score = 200;

if (score > 100) {
    // 'const' and 'let' are block-scoped,
    // so they can only be accessed inside this block.
    const power = "fly";
    console.log(`Power: ${power}`);
}

//  This will cause a ReferenceError because
// 'power' is not accessible outside the if block.
console.log(`Power: ${power}`);


// Comparison Operators


// <   : Less than
// >   : Greater than
// <=  : Less than or equal to
// >=  : Greater than or equal to
// ==  : Equal (checks value only)
// !=  : Not equal (checks value only)
// === : Strict equal (checks value and data type)
// !== : Strict not equal (checks value and data type)



// Single-line if statement

const balance = 1000;

// If there is only one statement, braces {} are optional.
// Multiple statements can be separated with commas,
// but this style is NOT recommended for readability.
if (balance > 500)
    console.log("test1"),
    console.log("test2");



// if...else if...else ladder


// Checks conditions from top to bottom.
// Once a condition is true, the remaining conditions are skipped.
if (balance < 500) {
    console.log("Less than 500");
}
else if (balance < 750) {
    console.log("Less than 750");
}
else if (balance < 900) {
    console.log("Less than 900");
}
else {
    // balance is 1000, so this block executes.
    console.log("Less than 1200");
}



// Logical Operators


const userLoggedIn = true;
const debitCard = true;
const loggedInFromEmail = true;
let guessUser = false;


// && (AND)
// All conditions must be true.
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

// The above condition is false because (2 == 3) is false.


// || (OR)
// At least one condition must be true.
if (loggedInFromEmail || guessUser) {
    console.log("User logged in");
}

// Since loggedInFromEmail is true,
// the OR condition becomes true and this block executes.