// Create a new Promise and store it in promiseOne
const promiseOne = new Promise(function (resolve, reject) {

    // Simulating an asynchronous task
    // Examples: Database calls, cryptography, network requests
    setTimeout(function () {
        console.log('Async task is complete');

        // Mark the promise as successfully completed
        resolve();
    }, 1000);
});

// Consume the resolved promise using .then()
promiseOne.then(function () {
    console.log("Promise consumed");
});


// Create and consume a promise immediately (without storing it in a variable)
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");

        // Resolve the promise after 1 second
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async task 2 resolved");
});


// Promise that resolves with an object (user data)
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {

        // Pass data to the next .then() callback
        resolve({
            username: "Chiya",
            email: "chaiyaracode@gmail.com"
        });

    }, 1000);
});

// Receive the resolved value
promiseThree.then(function (user) {
    console.log(user);
});


// Promise demonstrating resolve, reject, chaining, catch, and finally
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {

        let error = false;

        if (!error) {
            // Resolve with user object
            resolve({
                username: "Gamora",
                password: "123"
            });
        } else {
            // Reject with an error message
            reject("ERROR: Something went wrong");
        }

    }, 1000);
});

// First .then() receives the resolved object
promiseFour
    .then((user) => {
        console.log(user);

        // Return only the username to the next .then()
        return user.username;
    })

    // Receives the username returned above
    .then((username) => {
        console.log(username);
    })

    // Handles any rejection or error in the promise chain
    .catch(function (error) {
        console.log(error);
    })

    // Runs whether the promise is resolved or rejected
    .finally(() => {
        console.log("The promise is either resolved or rejected");
    });


// Promise for demonstrating async/await
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {

        let error = true;

        if (!error) {
            resolve({
                username: "Javascript",
                password: "123"
            });
        } else {
            reject("ERROR: JS went wrong");
        }

    }, 1000);
});


// Async function to consume promiseFive using async/await
async function consumePromiseFive() {
    try {
        // Wait until the promise resolves
        const response = await promiseFive;
        console.log(response);

    } catch (err) {
        // Handle rejected promise
        console.log(err);
    }
}

// Call the async function
consumePromiseFive();





// Fetch API using async/await
async function getAllUsers() {
    try {
        // Wait for the HTTP response
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // Convert response into JSON
        const data = await response.json();

        // Print user data
        console.log(data);

    } catch (error) {
        // Handle fetch or parsing errors
        console.log("E:", error);
    }
}

// Execute the async function
getAllUsers();


// Fetch API using Promise chaining (.then())
fetch("https://jsonplaceholder.typicode.com/users")

    // Convert response into JSON
    .then((response) => {
        return response.json();
    })

    // Receive parsed JSON data
    .then((data) => {
        console.log(data);
    })

    // Handle errors
    .catch((error) => {
        console.log("Error", error);
    });

