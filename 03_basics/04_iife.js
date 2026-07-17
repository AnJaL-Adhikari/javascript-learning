// Immediately Invoked Function Expressions (IIFE)
// ----------------------------
// Named IIFE (Immediately Invoked Function Expression)
// This function is defined and executed immediately.
// Useful for creating a private scope and avoiding global namespace pollution.
// ----------------------------
(function chiya() {
    console.log("DB CONNECTED");
})();

// ----------------------------
// Unnamed (Arrow Function) IIFE
// This anonymous arrow function is also executed immediately.
// It accepts a parameter (`name`) and prints it.
// ----------------------------
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("sulav");