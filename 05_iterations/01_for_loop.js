// ------------------------------------
// Loop
// ------------------------------------

// A loop is used to repeatedly execute a block of code
// until a specific condition becomes false.


// ------------------------------------
// For Loop
// ------------------------------------

// Syntax:
// for (initialization; condition; increment/decrement) {
//     code to execute
// }

// i starts from 0
// Loop runs until i is less than 10
// i increases by 1 after every iteration

for (let i = 0; i < 10; i++) {

    // Stores current value of i
    const element = i;

    // Checks when element value is 5
    if (element == 5) {
        console.log("5 is best number");
    }

    console.log(element);
}

// element cannot be accessed here
// because it is declared using const inside the loop block
// console.log(element);


// ------------------------------------
// Nested For Loop
// ------------------------------------

// A loop inside another loop is called a nested loop.

// Outer loop controls the first value
for (i = 0; i <= 10; i++) {

    console.log(`Outer loop value: ${i}`);

    // Inner loop runs completely for each outer loop iteration
    for (let j = 0; j <= 10; j++) {

        // Prints multiplication table
        console.log(i + '*' + j + ' = ' + i * j);
    }
}


// ------------------------------------
// Loop Through Array
// ------------------------------------

let myArray = ["flash", "batman", "superman"];

// length returns the total number of elements in the array
console.log(myArray.length);

// Accessing each array element using index
for (let index = 0; index < myArray.length; index++) {

    // Getting the current element from the array
    const element = myArray[index];

    console.log(element);
}


// ------------------------------------
// Break Statement
// ------------------------------------

// break is used to immediately stop the loop
// when a specific condition is met.

for (let index = 1; index <= 20; index++) {

    if (index == 5) {

        console.log(`Detected 5`);

        // Stops the loop completely
        break;
    }

    console.log(`Value of i is ${index}`);
}


// ------------------------------------
// Continue Statement
// ------------------------------------

// continue skips the current iteration
// and moves to the next iteration.

for (let index = 1; index <= 20; index++) {

    if (index == 5) {

        console.log(`Detected 5`);

        // Skips printing value 5
        // and continues with the next iteration
        continue;
    }

    console.log(`Value of i is ${index}`);
}