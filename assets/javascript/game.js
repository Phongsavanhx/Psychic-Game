var computerChoices = 
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var winsCounter = 0;
var lossCounter = 0;
var amountofGuesses = 9;
var guessChoices = [];

document.onkeyup = function(event) {

var userGuess = event.key;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var options = 
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
                 
    
    if (options.indexOf(userGuess) > -1) {
    
    if (userGuess === computerGuess) {
        winsCounter ++;
        amountofGuesses = 9;
        guessChoices = [];
        }
    
    if (userGuess != computerGuess) {
        amountofGuesses --;
        guessChoices.push(userGuess);
        }
    
    if (amountofGuesses === 0) {
        amountofGuesses = 9;
        lossCounter ++;
        guessChoices = [];
    
        }
    
    var html = 
        "<h1> The Psychic Game </h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + winsCounter + "</p>" +
        "<p>Losses: " + lossCounter + "</p>" +
        "<p>Guesses Left: " + amountofGuesses + "</p>" +
        "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";
        
        document.querySelector("#game").innerHTML = html;
    
    }};