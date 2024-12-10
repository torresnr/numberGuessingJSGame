// generating a random number
let randomNumber = Math.floor(Math.random() * 100 + 1);

// intialize number of guesses
let guesses = 1;
// document.getElementById("submitGuess").onclick = checkGuess();

function checkGuess() {
    // get user inputted guess/number
    let userGuess = document.getElementById("guess").value;
    if (userGuess == randomNumber) {
        alert("Correct! You guessed the number in " + guesses + " guesses.");
    }
    else if (userGuess > randomNumber) {
        guesses++;
        alert("Your guess is larger than the answer. Guess a smaller number. Try again!");
    }
    else {
        guesses++;
        alert("Your guess is smaller than the answer. Guess a larger number. Try again!");
    }
};