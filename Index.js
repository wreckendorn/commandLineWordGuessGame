// The file containing the logic for the course of the game, which depends on `Word.js` and:

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

//initialize the variables
init();

//intro the game to the user
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

//ask the user if they're ready to play. if yes, runGame
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

//function for initializing the values
function init(){
        director = directorBankArray[Math.floor(Math.random() * directorBankArray.length)];
        word = new Word(director);
        guesses = 10;
        guessedLetters = "";
}

//function for the gameplay. 
//- tells user how many guesses they have left. 
//- keeps track of all leters guessed. 
//- prints out the letters of the word they have guessed and placeholders for the letters they have not guessed.
function runGame(){
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
                //- uses the truth method from the Word object to determine if they guessed correctly
                word.truth(userLetter);
                
                //- if correct, updates the word to be displayed with the new letter they guessed added to it
                //- once all letters have been guessed correctly, runs winGame function
                if (word.print() === word.director) {
                        winGame(word.director);
                        }

                //-once they run out of all guesses, runs endGame function
                else if(guesses === 0){
                endGame(word.director);
                }

                //- if not correct, asks them for the next letter
                else {
                runGame();
                guesses = guesses - 1;
                }
        });

}

//function for when the user runs out of guesses. tells them what the director was. calls the playAgain function.
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

//function for when the user guesses all o the letters correctly. Shows the full director's name with all letters showing. Calls the playAgain function
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

//function for asking the user if they want to play again. If yes, it calls the init and runGame functions. if no, game quits.
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
