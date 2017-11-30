var right = 0;
var wrong = 0;
var unanswered = 0;

var questionNum = 0;
var timer = 30;



var start = function(){
	var startButton = $('<button>').text('Click Here to Start!')
		startButton.attr({
				'class': 'startButton',
			});
		$('.content').append(startButton)

	$('.startButton').on('click', function(){

		$('.content').empty();
		populateQuestion();
	});
}



var populateQuestion = function(){
	startTimer = setInterval(1000, timer)

	var question = questionList[questionNum].question;

	var divQ = $('<div>');
		divQ.attr({
				'class': 'question',
			
			});
	$('.content').append(divQ);

	populateAnswers();
}

var populateAnswers = function() {
	var answer1 =  questionList[questionNum].choice1;
 	var answer2 =  questionList[questionNum].choice2;
 	var answer3 =  questionList[questionNum].choice3;
 	var answer4 =  questionList[questionNum].choice4;

 		$('.choice1').text(questionList[questionNum].choice1)
 			
}

// This function resets the game when 


var reset = function() {

	right = 0;

	wrong = 0;
	
	unanswered = 0;

	questionNum = 0;

	timer = 30;

}

start();



// Below is the object/array of questions and answers

var questionList = [{
	'question': 'In what year did Seinfeld end?'
	'choice1': '1997'
	'choice2': '1996'
	'choice3': '1998'
	'choice4': '1999'
	'correctAnswer': '3'
	'gif': '../questionList0.gif'
} , {
	'question': 'What kind of golf ball does Kramer sink into a whales blowhole?'
	'choice1': 'Titleist'
	'choice2': 'Callaway'
	'choice3': 'Pinnacle'
	'choice4': 'Taylormade'
	'correctAnswer': '1'
	'gif': '../questionList1.gif'
} , {
	'question': 'What is the typo answer on the Trivial Pursuit card that causes the Bubble Boy to strangle George?'
	'choice1': 'The Moops'
	'choice2': 'The Nors'
	'choice3': 'The Moors'
	'choice4': 'The Noops'
	'correctAnswer': '1'
	'gif': '../questionList2.gif'
} , {
	'question': 'Which of the following is not a name Kramer goes by?'
	'choice1': 'H. E. Pennypacker'
	'choice2': 'Assman'
	'choice3': 'Dr. Van Nostrand'
	'choice4': 'K-Bomb'
	'correctAnswer': '4'
	'gif': '../questionList3.gif'
} , {
	'question': 'How many times did Jerry say "Hello, Newman" throughout the entire series'
	'choice1': '42'
	'choice2': '15'
	'choice3': '28'
	'choice4': '66'
	'correctAnswer': '2'
	'gif': '../questionList4.gif'
}]