// variables for wins, losses, and to set remainders at 10

var wins = 0;
var losses = 0;
var remainder = 10;
var guessedLetters = [];

// Initialize a random letter to begin 

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var computerGuess = randomLetter();

// function that selects a random letter from the alphabet string

function randomLetter() {
    var randNum = Math.floor(Math.random() * alphabet.length);
    var emptyString = alphabet[randNum];
    return emptyString;
}

// function that resets remainder

function resetRemainder() {
    remainder = 10;
}

function updateDisplay() {
    document.getElementById("card-text-wins").innerHTML = `${wins}`;
    document.getElementById("card-text-losses").innerHTML = `${losses}`;
    document.getElementById("card-text-guessesLeft").innerHTML = `${remainder}`;
    document.getElementById("guessedLetters").innerHTML = `${guessedLetters}`;
}

// Initialize the display

updateDisplay();

// on user's input trigger the whether the user has won or lost

document.onkeyup = function (event) {

    // User's input

    var userGuess = event.key;

    // Correct guess, reset wins, remainders, clear guesses, and select a new letter

    if (computerGuess === userGuess) {
        wins++;
        resetRemainder();
        guessedLetters = [];
        computerGuess = randomLetter();
    } else if (computerGuess !== userGuess && remainder > 1) {
        remainder--;
        guessedLetters.push(userGuess);
    } else {

        // Increment loss, reset remainder, clear the guessed letters, and pick a new letter

        losses++;
        remainder = 10;
        guessedLetters = [];
        computerGuess = randomLetter();
    }

    if (losses == 10) {
        alert("Game Over!");

        // Reset game to initial values

        wins = 0;
        losses = 0;
        remainder = 10;
        guessedLetters = [];
    }

    updateDisplay();
}
