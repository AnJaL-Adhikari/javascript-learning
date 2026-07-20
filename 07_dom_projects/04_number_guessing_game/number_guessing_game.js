let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;


// Submit button event
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();

        if (!playGame) {
            return;
        }

        const guess = parseInt(userInput.value);

        validateGuess(guess);
    });
}


// Check if the entered number is valid
function validateGuess(guess) {

    if (isNaN(guess)) {
        alert("Please enter a valid number");
    }

    else if (guess < 1) {
        alert("Please enter a number greater than 1");
    }

    else if (guess > 100) {
        alert("Please enter a number less than 100");
    }

    else {

        prevGuess.push(guess);

        if (numGuess === 10) {

            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);

            endGame();

        } 
        else {

            displayGuess(guess);
            checkGuess(guess);

        }
    }
}


// Compare user guess with random number
function checkGuess(guess) {

    if (guess === randomNumber) {

        displayMessage("You guessed it right 🎉");
        endGame();

    }

    else if (guess < randomNumber) {

        displayMessage("Number is too low ⬇️");

    }

    else {

        displayMessage("Number is too high ⬆️");

    }

}


// Display previous guesses and remaining attempts
function displayGuess(guess) {

    userInput.value = '';

    guessSlot.innerHTML += `${guess} `;

    numGuess++;

    remaining.innerHTML = `${11 - numGuess}`;

}


// Display messages
function displayMessage(message) {

    lowOrHigh.innerHTML = `<h2>${message}</h2>`;

}


// End game
function endGame() {

    userInput.value = '';

    userInput.setAttribute('disabled', '');

    submit.setAttribute('disabled', '');

    p.classList.add('button');

    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;

    startOver.appendChild(p);

    playGame = false;

    newGame();

}


// Start a new game
function newGame() {

    const newGameButton = document.querySelector('#newGame');

    newGameButton.addEventListener('click', function () {

        randomNumber = Math.floor(Math.random() * 100) + 1;

        prevGuess = [];

        numGuess = 1;

        guessSlot.innerHTML = '';

        remaining.innerHTML = '10';

        userInput.removeAttribute('disabled');

        submit.removeAttribute('disabled');

        startOver.removeChild(p);

        lowOrHigh.innerHTML = '';

        playGame = true;

    });

}