// You'll create a trivia game that shows only one question until the player answers it or their time runs out.

//Declare global variables
var questions = [
	{
		"question": "?",
		"choices": ["choice1", "choice2", "answer", "choice4", "choice5" ],
		"answer": "answer"
	},
	{
		"question": "?",
		"choices": ["answer", "choice2", "choice3", "choice4", "choice5" ],
		"answer": "answer"
	},
	{
		"question": "?",
		"choices": ["choice1", "choice2", "choice3", "answer", "choice5" ],
		"answer": "answer"
	},
	{
		"question": "?",
		"choices": ["choice1", "choice2", "choice3", "choice4", "answer" ],
		"answer": "answer"
	},
	{
		"question": "?",
		"choices": ["choice1", "answer", "choice3", "choice4", "choice5" ],
		"answer": "answer"
	}
];

var playerGuess;
var timeRemaining;
var guessedWrong = 0;
var guessedRight = 0;
var counter = 0;


//Declare functions

//Show the question and choices
function showQuestion () {

	$("#question").html("<h2>" + questions[counter].question + "</h2>");
	$("div[value = '0']").html(questions[counter].choices[0]);
	$("div[value = '1']").html(questions[counter].choices[1]);
	$("div[value = '2']").html(questions[counter].choices[2]);
	$("div[value = '3']").html(questions[counter].choices[3]);
	$("div[value = '4']").html(questions[counter].choices[4]);
	$(".answer").html("<p>" + questions[counter].answer + "</p>");
}

// //Show the next question
// function showNextQuestion() {

// }

// //Execute these steps if the player guesses right
// function guessedRight() {

// }

// //Execute these steps if the player guesses wrong
// function guessFail() {

// }

//Check the answer
// function checkAnswer () {

// 	// If the player runs out of time, 
// 	if (timeRemaining === 0) {
// 		//tell the player that time's up and display the correct answer. 
// 		console.log("time's up!");
// 		console.log("The correct answer is: " + questions[i].answer);
// 		//Wait a few seconds, then show the next question.
// 		guessFail();
// 		showNextQuestion();
// 	}


// 	// If the player selects the correct answer, 
// 	if (playerGuess === questions[i].answer) {
// 		//show a screen congratulating them for choosing the right option. 
// 		console.log("right!");
// 		guessedRight++;
// 		//After a few seconds, display the next question -- do this without user input.

// 	} else {
// 		// If the player chooses the wrong answer,
// 		// The scenario is similar for wrong answers and time-outs.
// 		console.log("wrong!");
// 		guessedWrong++;
// 		//tell the player they selected the wrong option 

// 		//and then display the correct answer. 

// 		//After a few seconds, display the next question -- do this without user input.
// 	}

//show the first question
showQuestion();

//when the user clicks a choice, +1 to counter
$(".choice").on("click", function() {
	
//check the answer
	
		console.log(this);
		playerGuess = $(this).html();
	
	if (playerGuess === questions[counter].answer) {
		//show a screen congratulating them for choosing the right option. 
		console.log("right!" + questions[counter].answer);
		guessedRight++;
		//After a few seconds, display the next question -- do this without user input.

	} else {
		// If the player chooses the wrong answer,
		// The scenario is similar for wrong answers and time-outs.
		console.log("wrong!");
		guessedWrong++;
		//tell the player they selected the wrong option 

		//and then display the correct answer. 

		//After a few seconds, display the next question -- do this without user input.
	}
	counter++;
	console.log("guessed right: " + guessedRight);
	console.log("guessed wrong: " + guessedWrong);
	if (counter >= questions.length) {
		alert("You won!!! New game?");
		counter = 0;
	}
		showQuestion();
	});






 



		//Wait a few seconds, then show the next question.


// On the final screen, 

	//show the number of correct answers, 

	//incorrect answers, 

	//and an option to restart the game (without reloading the page).