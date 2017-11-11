//array of letters for game
lettersArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//randomizing letters that browser will select when it loads
function randomizeLetters(){
	//generate random letter
	var randomLetters = lettersArray[Math.floor(Math.random()*lettersArray.length)];
	console.log(randomLetters);
	correctLetter = randomLetters;
};	

//The letters the user guessed
guessedLettersArray = [];

//the game: correct letter or not
addEventListener("keypress", function guessFunction(event) {
	guessesLeft = document.getElementById("guesses-left").innerHTML;
	number = parseInt(guessesLeft)
	wins = document.getElementById("wins").innerHTML;
	score = parseInt(wins);
	losses = document.getElementById("losses").innerHTML;
	fail = parseInt(losses);
	key = String.fromCharCode(event.keyCode).toLowerCase();
	
	if (key == correctLetter) {
		document.getElementById("wins").innerHTML = score++;
		
		//ALERT - YOU WIN!
		alert("You Win!")
		
		number = 9;
		randomizeLetters();
	} else if (number > 0) {
		guessedLettersArray.push(key);
		document.getElementById("guesses-left").innerHTML = number--;
		
		//ALERT - INCORRECT - TRY AGAIN
		alert("Wrong! Try Again!");

	} else {
		document.getElementById("losses").innerHTML = fail++;

		//ALERT - OUT OF TRIES, START OVER
		alert("You lost! Try Again. Guess a New Letter.");
		
		randomizeLetters();
		number = 9;
			for (i=0; i <guessedLettersArray.lenght; i++) {
				guessedLettersArray.splice(i);
			}
	}
	document.getElementById("guesses-left").innerHTML = number;
	document.getElementById("wins").innerHTML = score++;
	document.getElementById("losses").innerHTML = fail++;
})