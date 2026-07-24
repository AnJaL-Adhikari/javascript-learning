// A normal function that multiplies the given number by 5
function multiplyBy5(num) {
    return num * 5;
}

// Functions in JavaScript are objects,
// so we can add custom properties to them.
multiplyBy5.power = 2;

// Accessing the custom property
console.log(multiplyBy5.power); // 2

// Every function has a prototype object.
// This prototype is used when creating objects with the `new` keyword.
console.log(multiplyBy5.prototype);


// ---------------------- Constructor Function ----------------------

// Constructor function for creating user objects
function createUser(username, score) {
    // `this` refers to the newly created object
    this.username = username;
    this.score = score;
}

// Adding a method to the constructor's prototype.
// All objects created using `new createUser()`
// will share this method instead of creating a copy.
createUser.prototype.increment = function () {
    this.score++;
};

// Another shared prototype method
createUser.prototype.printMe = function () {
    console.log(`The price is ${this.score}`);
};


// ---------------------- Creating Objects ----------------------

// `new` does four things:
// 1. Creates a new empty object.
// 2. Sets its prototype to createUser.prototype.
// 3. Binds `this` to the new object.
// 4. Returns the new object.
const chiya = new createUser("chiya", 25);

//  Missing `new` keyword!
// `this` will not refer to a new object.
// In strict mode it becomes `undefined` (throws an error),
// otherwise it points to the global object.
// `tea` will be `undefined` because createUser doesn't return anything.
const tea = createUser("tea", 250);

// Calls the shared prototype method
chiya.printMe(); // The price is 25
/*





Here's what happens behind the scene when the new keyboard 
is used:

A new object is created: The new keyword initiates the 
creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked
to the prototype property of the constructor function. This
means that it has access to properties and methods defined
on the constructor's prototype.

The constructor is called: The constructor function is
called with the specified arguments and this is bound to 
the newly created object. If no explicit return value is
specified from the constructor. JavaScript assumes this,
the newly created object, to be the intended return value.

The new object is returned: After the constructor function 
has been called, if it doesn't return a non-primitive value 
(object, array, function, etc.), the newly created object 
is returned.

 */