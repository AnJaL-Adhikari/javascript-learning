// // Outer scope variable
// let a = 100;

// if (true) {
//     // Block scope: this 'a' is different from the outer 'a'
//     let a = 10;

//     // 'const' is also block-scoped
//     const b = 20;

//     // Avoid 'var' because it ignores block scope
//     var c = 30;

//     console.log("Inner value of a:", a); // 10
// }

// // Outer 'a' remains unchanged
// console.log("Outer value of a:", a); // 100

// // 'b' is not accessible outside the block
// // console.log(b); // ReferenceError

// // 'c' is accessible because 'var' is function-scoped
// // console.log(c); // 30


function one() {
    const username = "youngsheldon";

    function two() {
        const website = "netflix";

        // Lexical Scope:
        // Inner functions can access variables from their outer function.
        console.log(username);

        console.log(website);
    }

    // Cannot access 'website' here because it belongs to function 'two' only.
    // console.log(website);

    two();
}

one();


if (true) {
    const username = "monkeydluffy";

    if (username === "monkeydluffy") {
        const website = "hianime.com";

        // Both 'username' and 'website' are accessible inside this block.
        console.log(username + website);
    }

    // 'website' is block-scoped and cannot be accessed outside its block.
    // console.log(website);
}

// 'username' is also block-scoped.
// console.log(username);


// +++++++++++++++++++++ Hoisting +++++++++++++++++++++

// Function declarations are fully hoisted.
// They can be called before their definition.
console.log(addOne(5));

function addOne(num) {
    return num + 1;
}


// Function expressions are NOT fully hoisted.
// 'addTwo' exists in the Temporal Dead Zone (TDZ) until this line executes.
// Calling it before initialization throws a ReferenceError.

console.log(addTwo(5));

const addTwo = function (num) {
    return num + 2;
};

console.log(addTwo(5));
