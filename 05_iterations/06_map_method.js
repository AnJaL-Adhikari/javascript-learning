// ------------------------------------
// map() Method
// ------------------------------------

// map() creates a new array by applying a function
// to every element of the original array.
//
// Unlike forEach(), map() returns a new array.

const myNumbers = [1,2,3,4,5,6,7,8,9,10];


// Example of map()

// const newNums = myNumbers.map((num) => num + 10);

// console.log(newNums);


// ------------------------------------
// Method Chaining
// ------------------------------------

// Method chaining means using multiple array methods
// one after another on the same array.
//
// Here:
// 1. map() multiplies each number by 10
// 2. map() adds 1 to each updated value
// 3. filter() keeps only values greater than or equal to 40


const newNumsOne = myNumbers

    // First map: multiply every number by 10
    .map((num) => num * 10)

    // Second map: add 1 to every value
    .map((num) => num + 1)

    // Filter values that are >= 40
    .filter((num) => num >= 40);


console.log(newNumsOne);