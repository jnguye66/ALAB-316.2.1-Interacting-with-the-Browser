// Create your game here!
//let userGuess = window.prompt("Guess a number between 1 and 10");

function guessingGame() {
    let randNum = Math.floor(Math.random() * 10) + 1;
    // console.log(randNum);
    let check = 0;
    let tries = 0;
    while(check != 1){
        // Prompts the question to the user 
        let userGuess = window.prompt("Guess a number between 1 and 10");
        let userGuessParseInt = parseInt(userGuess); // converts the users answer into a number to compare to randNum

        if (userGuessParseInt === randNum) { // If users guess is correct
            let answer = window.alert(`Wow! You guess the right number, ${randNum}!`);
            check = 1;
        } else if (userGuessParseInt < randNum) { // If guess is lower
            let answer = window.alert(`Try guessing higher!`);
            tries += 1;
        } else if (userGuessParseInt > randNum) { // if guess is higher
            let answer = window.alert(`Try guessing lower!`);
            tries += 1;
        } else if (!(typeof userGuessParseInt === "number")) { // if what the user typed was not a number
            let answer = window.alert(`Please enter a number.`);
            tries += 1;
        }
    }
    let results = document.createElement('p');
    let displayTries = document.createElement('p');

    results.textContent = `Corrent Answer: ${randNum}`;
    displayTries.textContent = `Tries: ${tries}`;

    document.body.appendChild(results);
    document.body.appendChild(displayTries);
}
guessingGame();
