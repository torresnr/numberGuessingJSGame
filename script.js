// generating a random number
let randomNumber = Math.floor(Math.random() * 1000 + 1);

// intialize number of guesses
let guess = 1;
document.getElementById("submit").onclick = checkGuess();

function checkGuess() {
    // get user inputted guess/number
    let userGuess = document.getElementById("guess").value;
    if (userGuess == randomNumber) {
        alert("Correct! You guessed the number in" + guess + "guesses.");
    } else if (userGuess > randomNumber) {
        guess++;
        alert("Your guess is larger than the answer. Try again!")
    } else {
        guess++;
        alert("Your guess is smaller than the answer. Try again!")
    }
}