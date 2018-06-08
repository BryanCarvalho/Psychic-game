// variables for wins, losses, and to set remainders at 10

var wins = 0;
var losses = 0;
var remainder = 10;
var guessedLetters = [];

// function that selects a random letter from the alphabet string

function randomLetter() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var randNum = Math.floor(Math.random() * alphabet.length);
    var emptyString = alphabet[randNum];
    return emptyString;
}

// on user's input trigger the whether the user has won or lost

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = randomLetter();
    if (computerGuess === userGuess) {
        console.log(`success! both guessed ${computerGuess}`);
        wins++;
        guessedLetters.push(userGuess);
    } else {
        console.log(`fail! guessed ${computerGuess} : ${userGuess}`);
        losses++;
        remainder--;
        guessedLetters.push(userGuess);
    }

    // print these events to the console. Just to test.

    console.log(`wins: ${wins}`);
    console.log(`losses: ${losses}`);
    console.log(`remainder: ${remainder}`);
    console.log(`----------------------`);

    document.getElementById("card-text-wins").innerHTML = `${wins}`;
    document.getElementById("card-text-losses").innerHTML = `${losses}`;
    document.getElementById("card-text-guessesLeft").innerHTML = `${remainder}`;
    document.getElementById("guessedLetters").innerHTML = `${guessedLetters}`;

    // if less than one game, trigger the game over screen

    if (remainder < 1) {
        alert('game over!')
        wins = 0;
        losses = 0;
        remainder = 10;
        guessedLetters = [];
    }
}