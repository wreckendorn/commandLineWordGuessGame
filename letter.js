// Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), 
//depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

function Letter(actualLetter){
    //letter that corresponds to the same index number of the director's last name
    this.actualLetter = actualLetter,

    //value that stores if this letter has been guessed correctly, yet.
    this.guessed = false,

    //function that either shows the correct letter (if the user guessed it) or a placeholder, instead
    this.shout = function(actualLetter) {
        if(this.guessed == true) {
            return actualLetter;
        }
        else {
            return "_";
        }
    },

    //function to determine if the user has guessed this letter correctly this round. if yes, updates this.guessed.
    this.check = function(userLetter) {
        if(userLetter === actualLetter){ 
            this.guessed = true;
        }
    }
}

module.exports = Letter;