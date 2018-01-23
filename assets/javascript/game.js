var wins = 0;
var losses = 0;
var guessesLeft = 9;
var myGuess = ""
var computerGuess;
var usedLetters ="";

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	

document.onkeyup = function(event) {
	 document.querySelector("#wins").innerHTML = wins;
	 document.querySelector("#losses").innerHTML = losses
	 document.querySelector("#guessesLeft").innerHTML = guessesLeft
	 //I couldnt make my guesses show on the html :(
	 // document.querySelector("#myGuess").innerHTML = myGuess

	
	var myGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	console.log(computerGuess)

		if (computerGuess === myGuess){
			wins++;
			guessesLeft = 9;
			console.log(wins)
	}
	    if (computerGuess !== myGuess){
			// losses++;
			guessesLeft--;
	}
		if (guessesLeft<1) {
			losses++;
			guessesLeft = 9;
		}

	}

			// console.log(losses)
			// console.log(guessesLeft)
		


	




    


      
      


      
      

      

      

     

   


  

    

