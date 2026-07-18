// ------------------------------------
// forEach Loop
// ------------------------------------

// forEach() is an array method that executes
// a callback function for every element in an array.
//
// Syntax:
// array.forEach(function(element) {
//     code to execute
// });


// Array of programming languages
const coding = ['js', 'ruby', 'java', 'python', 'cpp'];


// ------------------------------------
// Using normal function with forEach
// ------------------------------------

// The callback function receives each array element
// one by one as the parameter.

coding.forEach(function (item) {

    // item contains the current array value
    console.log(item);

});


// ------------------------------------
// Using arrow function with forEach
// ------------------------------------

// Arrow functions provide a shorter syntax
// for writing functions.

coding.forEach((value) => {

    console.log(value);

});


// ------------------------------------
// Passing a function as a callback
// ------------------------------------

// A separate function can also be passed
// to forEach.

function printMe(item) {

    console.log(item);

}


// printMe function runs for every array element
coding.forEach(printMe);


// ------------------------------------
// Getting item, index, and complete array
// ------------------------------------

// forEach provides three parameters:
//
// item  -> current element
// index -> position of current element
// arr   -> complete array

coding.forEach((item, index, arr) => {

    console.log(item, index, arr);

});


// ------------------------------------
// forEach with Array of Objects
// ------------------------------------

// Array containing objects
const myCoding = [

    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    }

];


// Accessing object properties using forEach

myCoding.forEach((item) => {

    // item represents each object
    // Accessing languageName property
    console.log(item.languageName);

});