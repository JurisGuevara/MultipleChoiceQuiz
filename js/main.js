//these codes will generate 10 random questions out of 20
//and display them in a group of html documents


function displayQuiz(){
	document.getElementById('instructions').style.display = "none"
	document.getElementById('Quiz').style.display = "flex"
	//prototype to create new Quiz
	function Quiz(question, answer, correct){
		this.question = question
		this.answer = answer
		this.correct = correct
	}
	//20 questions that will use the prototype
	var q1 = new Quiz(
			'I ____ tennis every Sunday morning.',
			['playing', 'play', 'am playing', 'am play'],
			1
		)
	var q2 = new Quiz(
			'Don\'t make so much noise. Mark ____ to study for his Math test!',
			['try', 'tries', 'tried', 'is trying'],
			3
		)
	var q3 = new Quiz(
			'Matthew ____ his teeth before breakfast every morning.',
			['are brushing', 'is brushing', 'brushes', 'brush'],
			2
		)
	var q4 = new Quiz(
			'Sorry, he can\'t come to the phone. He ____ a bath.',
			['is taking', 'taking', 'take', 'taken'],
			0
		)
	var q5 = new Quiz(
			'____ many times every winter in Frankfurt.',
			['It snows', 'It snowed', 'It is snowing', 'It is snow'],
			0
		)
	var q6 = new Quiz(
			'How many students in your class ____ from Korea?',
			['is', 'are', 'was', 'am'],
			1
		)
	var q7 = new Quiz(
			'Weather report: It\'s seven o\'clock in Frankfurt and ____.',
			['there is snow', 'it\'s snowing', 'it snows', 'it snowed'],
			1
		)
	var q8 = new Quiz(
			'Babies ____ when they are hungry.',
			['cry', 'cries', 'cried', 'are crying'],
			0
		)
	var q9 = new Quiz(
			'Lisa: "What ____ during evenings?" \<br>\ Lawrence: "Usually, I watch TV or read a book."',
			['you doing', 'you do', 'do you do', 'are you doing'],
			2
		)
	var q10 = new Quiz(
			'Lisa: "What ____ ?" \<br>\ Lawrence: "I\'m trying to fix my calculator."',
			['you doing', 'you do', 'do you do', 'are you doing'],
			3
		)
	var q11 = new Quiz(
			'Jane ____ her blue jeans today, but she usually wears a skirt or dress.',
			['wears', 'wearing', 'wear', 'is wearing'],
			3
		)
	var q12 = new Quiz(
			'I think I ____ a new calculator. This one does not work properly anymore.',
			['needs', 'needed', 'need', 'am needing'],
			2
		)
	var q13 = new Quiz(
			'Sorry, you can\'t borrow my pencil. I ____ it myself.',
			['was using', 'using', 'use', 'am using'],
			3
		)
	var q14 = new Quiz(
			'At a school dance: \<br>\ Biggs: "____ yourself?" \<br>\ Wedge: Yes, "I\'m having a great time."',
			['You enjoying', 'Enjoy you', 'Do you enjoy', 'Are you enjoying'],
			3
		)
	var q15 = new Quiz(
			'I\'ve just finished reading a story called "Dangerous Game". It\'s about a man who ____ his wife because he doesn\'t want to lose her.',
			['kills', 'killer', 'kill', 'is killing'],
			0
		)
	var q16 = new Quiz(
			'What time ____',
			['the train leaves?', 'leaves the train?', 'is train leaving?', 'does the train leave?'],
			3
		)
	var q17 = new Quiz(
			'Lisa: "Are you going to the dance on Friday?" \<br>\ Lawrence: "No, I\'m not. I ____ school dances. They\'re loud, hot and crowded."',
			['not enjoy', 'don\'t enjoy', 'doesn\'t enjoy', 'am not enjoying'],
			1
		)
	var q18 = new Quiz(
			'I ____ for my pen. Have you seen it?',
			['will look', 'looking', 'look', 'am looking'],
			3
		)
	var q19 = new Quiz(
			'You can keep my iPod if you like. I ____ it anymore.',
			['don\'t use', 'doesn\'t use', 'didn\'t use', 'not using'],
			0
		)
	var q20 = new Quiz(
			'The phone ____. Can you answer it, please?',
			['rings', 'ring', 'rang', 'is ringing'],
			3
		)

	//storing all the new methods in an array
	var Questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20]

	//function to shuffle the Questions array
	var shuffleArray = function(arr){
		var newPos,
			temp
		for(i = arr.length - 1; i > 0; i--){
			newPos = Math.floor(Math.random() * (i + 1))
			temp = arr[i]
			arr[i] = arr[newPos]
			arr[newPos] = temp
		}
		return arr
	}
	shuffleArray(Questions)
	// console.log(shuffleArray(Questions))

	//function to display the shuffled Questions array to the html
	Quiz.prototype.displayQuestions = function(arr){
		for(i = 0; i < 10; i++){
			let x = i + 1
			document.getElementById(`q${x}`).innerHTML = arr[i].question
		}
	}(Questions)

	Quiz.prototype.sortAnswers = function(arr){
		let answerHolder = []
		for(i = 0; i < 10; i++){
			for(j = 0; j < 4; j++){
				answerHolder.push(arr[i].answer[j])
			}
		}
		// console.log(answerHolder)
		return answerHolder
	}(Questions)

	function displayAnswers(arr){
		for(i = 0; i < arr.length; i++){
			document.getElementById(`a${i + 1}`).innerHTML = arr[i]
		}
	}
	displayAnswers(Quiz.prototype.sortAnswers)

	// console.log(Quiz.prototype.sortAnswers)
	// console.log(Questions)

	document.getElementById('submitQuiz').onclick = function(){
		Quiz.prototype.checkAnswer = function(arr){
			var score = 0
			for(i = 0; i < 10; i++){
				for(j = 0; j < 4; j++){
					var x = document.getElementById(`q${i + 1}rd${j + 1}`)
					x.disabled = true
					if(x.checked == true && j == arr[i].correct){
						score ++
						x.parentNode.style.backgroundColor = '#66ff66'
						x.previousElementSibling.innerHTML = '&#160&#10004'
					}else if(x.checked == true && j != arr[i].correct){
						x.parentNode.style.backgroundColor = '#ffb3b3'
						x.previousElementSibling.innerHTML = '&#160&#10006'
					}else if(j == arr[i].correct){
						x.parentNode.style.backgroundColor = '#b3ffb3'
					}
				}
			}
			console.log(score)
			document.getElementById('score').innerHTML = `${score}/10`
		}(Questions)
		document.getElementById('submitQuiz').style.display = "none"
		document.getElementById('retryQuiz').style.display = "flex"
		document.documentElement.scrollTop = 0
		document.getElementById('score-box').style.display = "flex"
		document.getElementById('result-txt').style.display = "flex"
	}
}
// if(j == arr[i].correct){
// 	document.getElementById(`q${i + 1}rd${j + 1}`).parentNode.style.backgroundColor = '#99ff99'
// }
// document.getElementById(`q${i + 1}rd${j + 1}`).parentNode.style.backgroundColor = '#99ff99'
// document.getElementById('q1rd1').parentNode.style.backgroundColor = 'pink'
// console.log(arr[0].question, arr[0].answer, arr[0].correct)


















