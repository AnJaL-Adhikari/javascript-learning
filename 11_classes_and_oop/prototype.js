// A string with extra spaces at the end
let myName = "spiderman   ";

// Removes leading/trailing spaces, then prints the length
console.log(myName.trim().length);

// Calls our custom String method (defined later in the code)
console.log(myName.trueLength());


// ---------------------- Arrays & Objects ----------------------

// Array of superhero names
let myHeros = ["spiderman", "thor"];

// Object containing superhero powers
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    // Method to access the spiderman property using `this`
    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
};


// ---------------------- Prototype Extension ----------------------

// Adding a method to Object prototype
// Every object (including arrays) can now use batman()
Object.prototype.batman = function () {
    console.log(`Batman is present in all objects`);
};

// Adding a method only to Array prototype
// Only arrays can use heyBatman()
Array.prototype.heyBatman = function () {
    console.log(`Batman says hello`);
};


// ---------------------- Prototype Method Calls ----------------------

// heroPower is an object, so it inherits batman()
heroPower.batman();

// myHeros is an array, which also inherits from Object
myHeros.batman();

// heyBatman() exists on Array prototype, so arrays can use it
myHeros.heyBatman();

//  Error!
// heroPower is a plain object, not an array,
// so it does NOT inherit Array.prototype methods.
heroPower.heyBatman();


// ---------------------- Prototype Inheritance ----------------------

// Base object
const User = {
    name: "chiya",
    email: "chiya@gmail.com"
};

// Teacher object
const Teacher = {
    makeVideo: true,
};

// Teaching support object
const TeachingSupport = {
    isAvailable: false
};

// TA Support object
// Inherits properties from TeachingSupport
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
};

// Teacher inherits from User
// Teacher can now access User's properties
Teacher.__proto__ = User;

// Modern way of setting prototype
// TeachingSupport now inherits from Teacher
Object.setPrototypeOf(TeachingSupport, Teacher);


// ---------------------- String Prototype ----------------------

// String with extra spaces
let anotherUsername = "Spiderman brand new day      ";

// Adding a custom method to all strings
String.prototype.trueLength = function () {

    // `this` refers to the string that called the method
    console.log(`${this}`);

    // String objects don't have a `name` property
    // console.log(`${this.name}`);

    // Prints the string length after trimming spaces
    console.log(`True length is : ${this.trim().length}`);
};

// Calling custom method on a string variable
anotherUsername.trueLength();

// Calling custom method directly on string literals
"Superman".trueLength();
"Peach tea".trueLength();