// Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to 
// guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays 
// the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
var Letter = require("./letter.js")

function Word(director) {
    //the real word
    var n = director.length;
    this.director = director,
    

    //the real word as an array

    //array of each letter as an object
    this.letterArr = new Array(n)
        for (var i = 0; i < n; i++) {
            this.letterArr[i] = new Letter(director[i]);
        }



// takes each letter from the array and combines them into a string to display
    this.print = function() {
        var newWord = "";
            for (var i = 0; i < this.letterArr.length; i++) {
                newWord += this.letterArr[i].shout(this.letterArr[i].actualLetter);
            //    newWord.append(this.letterArr[i].actualLetter);
            }
            return newWord;
        
    }

// //calls guess function for each letter object with user's guess as an argument
    this.truth = function(userGuess) {
        
        for (var i = 0; i < this.letterArr.length; i++){
        this.letterArr[i].check(userGuess);
        }
    }

}

module.exports = Word;

//i can create the random director and store it
//i use the director to create a new object 
//the word object stores:
//                       the real word
//                       an array of each letter as an object
//                       a string that represents the current status of the guessed word
//          `            determines if the letter was guessed correctly using the guess function from each letter object
//the letter object stores:
//                      the letter being guessed
//                      the actual letter the object is holding from the director's name
//                      the state of if the letter has been guessed, yet
//                      a function to determine if the guess was true and updates the state of the letter guess
//                      
