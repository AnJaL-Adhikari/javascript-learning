// ------------------------------------
// for...of Loop
// ------------------------------------

// for...of loop is used to iterate over
// iterable objects like arrays, strings, maps, etc.
//
// Syntax:
// for (const value of iterable) {
//     code to execute
// }


// ------------------------------------
// for...of with Array
// ------------------------------------

const arr = [1, 2, 3, 4, 5];


// Each iteration gives the actual value of the array
for (const num of arr) {

    console.log(num);

}


// ------------------------------------
// for...of with String
// ------------------------------------

const greetings = "Hello world!";


// Strings are iterable, so for...of
// gives each character one by one
for (const greet of greetings) {

    console.log(`Each char is ${greet}`);

}


// ------------------------------------
// Maps
// ------------------------------------

// Map stores data in key-value pairs.
// Keys in a Map must be unique.
// If the same key is added again, the old value is replaced.

const map = new Map();

map.set('NEP', "Nepal");
map.set('USA', "United State of America");
map.set('NEP', "Nepal"); // Duplicate key, ignored/replaces existing value
map.set('Fr', "France");
map.set('USA', "United State of America");
map.set('Fr', "France");


// Display complete Map
console.log(map);


// ------------------------------------
// Iterating Map using for...of
// ------------------------------------

// Map returns data as [key, value] pairs.
// Array destructuring is used to separate key and value.

for (const [key, value] of map) {

    console.log(key, ':-', value);

}


// ------------------------------------
// for...of does not work directly on Objects
// ------------------------------------

// Objects are not iterable by default.

const myObject = {

    'game1': 'NFS',
    'game2': 'Spiderman'

};


//  This will give an error:
for (const [key, value] of myObject) {
    console.log(key, ':-', value)
}


// Use Object methods like Object.keys(),
// Object.values(), or Object.entries() for objects.


// ------------------------------------
// for...in Loop
// ------------------------------------

// for...in is mainly used to iterate over objects.
// It gives the keys of an object.

const myObjectOne = {

    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'

};


for (const key in myObjectOne) {

    // Accessing object value using key
    console.log(`${key} shortcut is for ${myObjectOne[key]}`);

}


// ------------------------------------
// for...in with Array
// ------------------------------------

// In arrays, for...in gives the indexes.

const programming = ['js', 'rb', 'py', 'Java', 'cpp'];


for (const key in programming) {

    // Access value using index
    console.log(programming[key]);

}


// ------------------------------------
// for...in with Map
// ------------------------------------

// Map is iterable using for...of,
// but for...in does not work with Map values.

const mapOne = new Map();

mapOne.set('NEP', "Nepal");
mapOne.set('USA', "United State of America");
mapOne.set('Fr', "France");


// This loop will not give Map key-value pairs
for (const key in mapOne) {

    console.log(key);

}