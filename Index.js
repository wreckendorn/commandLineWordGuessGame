// **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

// 3. `Letter.js` *should not* `require` any other files.

// 4. `Word.js` *should only* require `Letter.js`


var inquirer = require("inquirer");
var Word = require("./Word.js")
var directorBankArray = ["spielberg","lucas","aronofsky", "nolan", "jonze","kubrick","allen","lee","tarantino","scorsese","hughes","lynch","hitchcock","anderson","fincher","cameron","coppola","scott","burton","lee","jackson","stone","howard","carpenter","fellini","soderbergh","herzog"];
var director = "";
var word = "";
var guesses = 0;
var guessedLetters = "";

init();
console.log("");
console.log("");
console.log("==============================================");
console.log("");
console.log("W E L C O M E   T O   G U E S S   T H E   D I R E C T O R")
console.log("");
console.log("==============================================");
console.log("");
console.log("I will select the last name of a director randomly for you.");
console.log("You will then have 10 chances to guess all of the letters");
console.log("");
inquirer.prompt([
        {
                type: "confirm",
                name: "readyPlay",
                message: "Are you ready to play?"
        }
]).then(function(user) {
        if(user.readyPlay){
        runGame();
        }
});


// runGame();

function init(){
        director = directorBankArray[Math.floor(Math.random() * directorBankArray.length)];
        word = new Word(director);
        guesses = 10;
        guessedLetters = "";
}

function runGame(){

     

//checkes to see if they're out of guesses. If they are, game over. If they're not, move along.
        
//prints out word with underscores and letters guessed
        console.log("");
        console.log("");
        console.log("         You have " + guesses + " guesses left")
        console.log(" Guesses so far: " + guessedLetters.split('').join(", ").toUpperCase())
        console.log("==============================================");
        console.log("");
        console.log("                 " + word.print().split('').join(' ').toUpperCase());
        console.log("");
        console.log("==============================================");
        console.log("");
        console.log("");

//get user's next guess
        inquirer.prompt([
                {
                        type: "input",
                        name: "getLetter",
                        message: "Enter a letter"
                }
        ]).then(function(user) {
                var userLetter = user.getLetter;
                guessedLetters += userLetter;
                word.truth(userLetter);
                
                if (word.print() === word.director) {
                        winGame(word.director);
                        }

                else if(guesses === 0){
                endGame(word.director);
                }

                else {
                runGame();
                guesses = guesses - 1;
                }
        });

}

function endGame(director){
        console.log("");
        console.log("");
        console.log("==============================================");
        console.log("");
        console.log("             You are out of guesses .");
        console.log("");
        console.log("               The director was " + director.toUpperCase());
        console.log("");
        console.log("==============================================");
        console.log("");
        console.log("");
        playAgain();
}

function winGame(director){
        console.log("");
        console.log("");
        console.log("==============================================");
        console.log("");
        console.log("                  You win!");
        console.log("");
        console.log("==============================================");
        console.log("");
        console.log("");
        console.log("         The director is " + director.toUpperCase() + "!");
        console.log("");
        console.log("");
        playAgain();
}

function playAgain() {
        inquirer.prompt([
                {
                        type: "list",
                        name: "playAgain",
                        message: "Do you want to play again?",
                        choices: ["Yes","No"]
                }
        ]).then(function(user) {
                if(user.playAgain === "Yes"){
                init();
                runGame();
                }
                else{
                        console.log("");
                        console.log("");
                        console.log("goodbye");
                        console.log("");
                        console.log("");
                }
        });
}
