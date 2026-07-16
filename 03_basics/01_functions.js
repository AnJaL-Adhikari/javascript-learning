// A function groups reusable code that runs only when it's called.
function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("Y");
}

sayMyName(); // Function invocation

// Parameters receive values passed during the function call.
function addTwoNumbers(number1, number2) {
    console.log("Hello World");

    // 'return' ends the function immediately.
    return number1 + number2;

    // This line will never execute because it is after 'return'.
    console.log("Hello Sarkar");
}

const result = addTwoNumbers(3, 5);
console.log("Result:", result);

// Default parameter is used when no argument is provided.
function loginUserMessage(username = "user") {

    // !username checks for undefined, null, "", 0, NaN, or false.
    if (!username) {
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}

console.log(loginUserMessage("Rakhi Sawant"));

// Rest operator (...) collects remaining arguments into an array.
function calculateCardPrice(val1, val2, ...num1) {
    return num1;
}

console.log(calculateCardPrice(100, 200, 500, 3000));
// val1 = 100
// val2 = 200
// num1 = [500, 3000]

// Objects can be passed directly as function arguments.
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject({
    username: "Nick Furry",
    price: 299
});

// Arrays can also be passed to functions.
function returnSecondValue(getArray) {
    return getArray[1];
}

const myNewArray = [200, 400, 100, 600];

console.log(returnSecondValue(myNewArray)); // 400