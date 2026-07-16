const user = {
    username: "Zoro",
    price: 999,

    welcomeMessage: function () {
        // 'this' refers to the object that calls the method.
        console.log(`${this.username}, welcome to website`);

        // Logs the current object.
        console.log(this);
    }
};

user.welcomeMessage();

user.username = "Sam"; // Updating the object's property.
user.welcomeMessage();

// In Node.js, 'this' at the top level refers to the current module ({}).
// In a browser, it refers to the 'window' object.
console.log(this);



function chiya() {
    let username = "hitesh";

    // 'this' inside a regular function is NOT the local scope.
    // Therefore, this.username is undefined.
    console.log(this.username);
}

chiya();


// ++++++++++++++++ Arrow Function ++++++++++++++++

const chai = () => {
    let username = "hitesh";

    // Arrow functions do NOT have their own 'this'.
    // They inherit 'this' from the surrounding (lexical) scope.
    console.log(this);
};

chai();


// Explicit return (use '{}' with 'return')
const addTwo = (num1, num2) => {
    return num1 + num2;
};


// Implicit return (no 'return' keyword needed)
const addNum = (num1, num2) => (num1 + num2);

console.log(addNum(3, 2));


// Return an object using implicit return.
// Parentheses are required around the object.
const addObject = () => ({ username: "Sanji" });

console.log(addObject());


// 'this' refers to the object that invokes the function.

// Regular functions have their own 'this'.

// Arrow functions do not have their own 'this';
// they inherit it from the surrounding lexical scope.

// Use explicit return when the function body uses '{}'.

// Use implicit return for short one-line expressions.

// Wrap object literals in '()' when returning them implicitly.