// *Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), 
//depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
// var userGuess = process.argv[2];
// var newLetter = new Letter(userGuess, "l");

// console.log("====================");
// console.log("");
// console.log("You guessed the letter " + userGuess);
// console.log("");
// console.log("===================");
// console.log("");
// console.log("Here is the letter object you created");
// console.log(newLetter);
// console.log(newLetter.display("l"));
// // console.log(newLetter.check(userGuess));

function Letter(actualLetter){
    this.actualLetter = actualLetter,
    this.guessed = false,

    this.shout = function(actualLetter) {
        if(this.guessed == true) {
            return actualLetter;
        }
        else {
            return "_";
        }
    },

    this.check = function(userLetter) {
        if(userLetter === actualLetter){ 
            this.guessed = true;
        }
      
    }


}

module.exports = Letter;