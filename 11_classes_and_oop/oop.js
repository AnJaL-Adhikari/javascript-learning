// Object literal
// An object is a collection of properties (data) and methods (functions).
const user = {
    // Properties
    username: "Spiderman",
    loginCount: 8,
    signedIn: true,

    // Method (function inside an object)
    getUserDetails: function () {
        console.log("Got user details from database");

        // 'this' refers to the current object (user)
        console.log(`Username:`, this.username);

        // Prints the entire object that called this method
        console.log(this);
    }
};

// Accessing an object's property using dot notation
console.log(user.username); // Spiderman

// Calling the object's method
// The method logs information and doesn't return anything,
// so console.log() will print 'undefined' after the method finishes.
console.log(user.getUserDetails());

/*
Output:
Got user details from database
Username: Spiderman
{
  username: 'Spiderman',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}
undefined
*/

// At the global scope:
// In a browser, `this` refers to the `window` object.
// In Node.js, `this` is an empty object (`{}`) in a module.
console.log(this);
// Constructor function for creating User objects
function User(username, loginCount, isLoggedIn) {

    // 'this' refers to the object being created (when called with 'new')
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // Method available on each User object
    this.greeting = function () {
        console.log(`Welcome ${username}`);
    };

    // Returning 'this' is optional in constructor functions.
    // If called with 'new', JavaScript automatically returns 'this'.
    return this;
}

/* ---------------- WITHOUT 'new' ---------------- */

// Calling the constructor like a normal function.
// 'this' refers to the global object (or undefined in strict mode),
// so the properties are NOT created as separate User objects.
const userOne = User("hulk", 12, true);
const userTwo = User("Spiderman", 11, false);

// Both variables point to the same object (global object in non-strict mode),
// and the second call overwrites the values from the first call.
// This is NOT the correct way to use constructor functions.


/* ---------------- WITH 'new' ---------------- */

// The following lines redeclare userOne and userTwo,
// so remove the above declarations if you want this code to run.

const userOne = new User("hulk", 12, true);
const userTwo = new User("Spiderman", 11, false);

// Prints the first User object
console.log(userOne);

// Prints the second User object
console.log(userTwo);

// Every object has a constructor property that points to
// the function used to create it.
console.log(userOne.constructor);

// Output:
// [Function: User]

