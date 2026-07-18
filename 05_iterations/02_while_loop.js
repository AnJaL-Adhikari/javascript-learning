// ------------------------------------
// While Loop
// ------------------------------------

// A while loop executes a block of code
// as long as the given condition is true.

// Syntax:
// while (condition) {
//     code to execute
//     update condition
// }


// Example of while loop

let index = 0;

// Loop runs while index is less than or equal to 10
while (index <= 10) {

    console.log(`Value of index is ${index}`);

    // Updating the value to avoid an infinite loop
    index = index + 2;
}


// ------------------------------------
// While Loop with Array
// ------------------------------------

let myArray = ['flash', 'batman', 'superman'];

let arr = 0;

// Loop through each array element
while (arr < myArray.length) {

    console.log(`Value is ${myArray[arr]}`);

    // Increase index to move to the next element
    arr = arr + 1;
}


// ------------------------------------
// Do While Loop
// ------------------------------------

// A do...while loop executes the code block
// at least once before checking the condition.

// Syntax:
// do {
//     code to execute
// } while (condition);


// Current score value
let score = 11

do {

    // This code runs first
    console.log(`Score is ${score}`);

    // Increase score by 1
    score++;

} while (score <= 10);

// Condition is checked after execution.
// Even though score is already 11,
// the loop runs once because do...while
// always executes at least one time.