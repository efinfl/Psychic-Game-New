
// Variables that hook into html tags.
var winsDisplay = document.getElementById("wins");
var lossesDisplay = document.getElementById("losses");
var turnsLeftDisplay = document.getElementById("turnsLeft");
var lettersChosenDisplay = document.getElementById("lettersChosen")

/* Global variables: wins, losses 
(each los takes away a guess) */
var wins = 0;
var losses = 0;
var turns = 9;
var lettersChosen = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z",];

// Displays initial stats by pulling from above variables
winsDisplay.innerHTML = wins;
lossesDisplay.innerHTML = losses;
turnsLeftDisplay.innerHTML = turns;


// StartIt() funtion is called to generate a random numger.
startIt()

// function to generate random number which was called abouve. 
function startIt() {
    // Random computer choice
    turns = 9;
    lettersChosen = [];
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);
    
    winsDisplay.innerHTML = wins;
    lossesDisplay.innerHTML = losses;
    turnsLeftDisplay.innerHTML = turns;
    lettersChosenDisplay.innerHTML = lettersChosen;
}


// When a key is pressed the choice is recorded into userGuess
document.onkeyup = function user(event) {
    var userGuess = event.key;
    // Adds gues to the lettersChosen array variable above?
    lettersChosen.push(userGuess);
    lettersChosenDisplay.innerHTML = lettersChosen;

    // Checks if userGuess and computerChoice are the same. If true wins tick up on and the folloiwn happens
    if (userGuess === computerChoice) {
        wins++;

        // Dislplays wins in html doc by pulling wins variable applying it to winsDisplay
        winsDisplay.innerHTML = wins;

        alert("That's amazing. Your psychic!")

        // This resets the game
        startIt();
    }
    // Takes away a turn if user guess doesn't match the computer guess
    else {
        turns--;
        // Displays turns left in html doc by pulling turns variable and assigning it to turnsLeftDisplay variable
        turnsLeftDisplay.innerHTML = turns;
    }
    // Checks to see if user has run out of turns
    if (turns === 0) {
        // If turns have run out, add a loss, reset turns to 9 and restart game.
        losses++;

        // Displays losses in html document
        lossesDisplay.innerHTML = losses;

        alert("Bummer! Try again.")



        startIt();
    }

}




