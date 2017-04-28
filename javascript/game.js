

var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z"];

var userGuess = [];

var wins = 0;
var losses = 0;
var guessLeft = 9;
var computerGuess = computerChoices[
    Math.floor(Math.random() * computerChoices.length)];


function myFunction() {
    document.getElementById("demo").innerHTML = computerGuess;
}

myFunction();

document.onkeyup = function(event) {
  var key = event.key;
  console.log(key);
  userGuess.push(key);
  document.getElementById("left").innerHTML = guessLeft--;
  document.getElementById("letters").innerHTML = userGuess;

  if (key === computerGuess) {
    document.getElementById("wins").innterHTML = wins++, alert("WINNER WINNER WINNER!");
  }

  if (guessLeft < -1) {
    document.getElementById("losses").innerHTML = losses++, alert("Womp Womp");
  }

  }