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


//Declare functions

// //Show the question and choices
// function showQuestion () {
// 	$(".question").html("<h2>" + questions[i].question + "</h2>");
// 	$(".choice").attr("val", 0).html("<p>" + questions[i].question[0] + "</p>");
// 	$(".choice").attr("val", 1).html("<p>" + questions[i].question[1] + "</p>");
// 	$(".choice").attr("val", 2).html("<p>" + questions[i].question[2] + "</p>");
// 	$(".choice").attr("val", 3).html("<p>" + questions[i].question[3] + "</p>");
// 	$(".choice").attr("val", 4).html("<p>" + questions[i].question[4] + "</p>");
// 	$(".answer").html("<p>" + questions[i].answer + "</p>");
// }

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

for (i=0; i<questions.length; i++) {
	$("#question").html("<h2>" + questions[i].question + "</h2>");
	$("div[value = '0']").html("<p>" + questions[i].choices[0] + "</p>");
	$("div[value = '1']").html("<p>" + questions[i].choices[1] + "</p>");
	$("div[value = '2']").html("<p>" + questions[i].choices[2] + "</p>");
	$("div[value = '3']").html("<p>" + questions[i].choices[3] + "</p>");
	$("div[value = '4']").html("<p>" + questions[i].choices[4] + "</p>");
	$(".answer").html("<p>" + questions[i].answer + "</p>");

	$(".question").on("click", function() {
		console.log(this);
		playerGuess = this;
	});
	if (playerGuess === questions[i].answer) {
		//show a screen congratulating them for choosing the right option. 
		console.log("right!");
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
	};






 



		//Wait a few seconds, then show the next question.


// On the final screen, 

	//show the number of correct answers, 

	//incorrect answers, 

	//and an option to restart the game (without reloading the page).