$(document).ready(function() {

	var currentQ = 0;
	var numCorrect = 0; 
	//shows the user which question they're on 
	var qDisplay = 1; 

	$(".quiz-area").hide();
	$(".answer-screen").hide();
	$(".finish-screen").hide();

	$(".start-button").click(function() { 
		$(".start").hide();
		$(".quiz-area").fadeIn();
	});

	$(document).on("click", ".submit-button", evalAns);
	$(document).on("click", ".continue", nextQ);
	$(document).on("click", ".new", newGame);
	$(document).on("click", ".play-again", newGame);

	//replaces current question with next question's attributes
	function newQuestion () { 
		$(".questionNum").html(qDisplay);
		$(".question h3").html(questions[currentQ].question);
		$("input[type='radio']").prop('checked', false);
		$(".answer-0").html(questions[currentQ].answers[0]);
		$(".answer-1").html(questions[currentQ].answers[1]);
		$(".answer-2").html(questions[currentQ].answers[2]);
		$(".answer-3").html(questions[currentQ].answers[3]);
		$(".answer-screen p").html(questions[currentQ].blurb);
		$(".answer-screen img").attr("src", questions[currentQ].pic).css({"height": "400px"});
	}

	//loads a new game when user clicks New Game
	function newGame () { 
		currentQ = 0; 
		numCorrect = 0; 
		qDisplay = 1;
		$(".start").fadeIn();
		$(".quiz-area").hide();
		$(".answer-screen").hide();
		$(".finish-screen").hide();
		newQuestion();
		$(".score-count").html(numCorrect + " of 5");

	}

	//evaluate user's answer 
	function evalAns () { 
		var userAns = $("input[type='radio']:checked").val();
		//error message if nothing is selected
		if (userAns == undefined) {
			alert("Please select an answer!");
		} else { 
			$(".quiz-area").hide();
			//if answer is correct
			if (userAns == questions[currentQ].correctAns) { 
				numCorrect++; 
				$(".score-count").html(numCorrect + " of 5");
				$(".answer-screen h2").html("Correct!");
				$(".answer-screen").fadeIn();
			} else { 
				//if answer is incorrect
				$(".answer-screen h2").html("Incorrect!");
				$(".answer-screen").fadeIn();
			}
		}
	}


	//displays next question after answer screen
	function nextQ () { 
		currentQ++;
		console.log(currentQ);
		$(".answer-screen").hide(); 
		//show next question if not finished 
		if (currentQ < 5) { 
			qDisplay++; 
			newQuestion();
			$(".quiz-area").fadeIn();
		} else { 
			//show finish screen if finished with questions
			$(".new").hide();
			$(".finish-screen h3").html("Your final score is: " + numCorrect + " of 5");
			$(".finish-screen").fadeIn();
		}
	}


	//questions 
	var questions = [{ 
		question: "Which of these films is set in London and Punjab and is said to have revolutionized the modern Indian love story?",
		answers: ["Jab We Met", "Dilwale Dulhania Le Jayenge", "Bodyguard", "Kuch Na Kaho"],
		correctAns: 1,
		blurb: "Aditya Chopra's <span class='film-title'>Dilwale Dulhania Le Jayenge</span> (1995) canonized, among other things, the romantic runaway train scene.",
		pic: "images/DDLJ.jpg"
	}, 
	{ 	question: "Umrao Jaan, the 19th-century courtesan depicted in <span class='film-title'>Umrao Jaan</span> (1981), is kidnapped as a child from which north Indian city?",
		answers: ["Lucknow", "Faizabad", "Lahore", "Faisalabad"],
		correctAns: 1,
		blurb: "Umrao Jaan was kidnapped as a girl from Faizabad, a beauitful old center of Urdu culture in present-day Uttar Pradesh, and sold to a brothel in Lucknow.",
		pic: "images/UmraoJaan.jpg"
	}, 
	{ 	question: "At the beginning of <span class='film-title'>Lagaan</span> (2001), the local raja meets with Andrew Russell to negotiate the onerous tax imposed on his village, but the negotiations fail. Why?",
		answers: ["Russell wants to double the tax in exchange for postponing it, but the raja refuses", "The raja insults the British crown", "Russell threatens to revoke the village's protection unless the tax is paid on time", "Russell tries to force the raja to eat meat, and he refuses"],
		correctAns: 3,
		blurb: "Evil Captain Andrew Russell says he will suspend the village tax if Raja Puran Singh eats meat, but the raja, a scrupulous and upstanding Hindu, emphatically refuses, forcing the entire village to play a dramatic game of cricket to determine their fate.",
		pic: "images/Lagaan.jpg"
	}, 
	{ 	question: "Which Bollywood actress has never won a beauty pageant?", 
		answers: ["Priyanka Chopra", "Gul Panag", "Zeenat Aman", "Deepika Padukone"],
		correctAns: 3,
		blurb: "Stunning Deepika Padukone has never been a beauty queen. She's too modern and empowered for that.",
		pic: "images/Deepika.png"
	},
	{	question: "Madhubala rose to fame following her role in which classical film?", 
		answers: ["Mughal-e-Azam", "Pakeezah", "Barsaat", "Aashiqui"],
		correctAns: 0, 
		blurb: "Madhubala (Mumtaz Jehan) propelled to fame following her role as the ill-fated court dancer Anarkali in <span class='film-title'>Mughal-e-Azam</span> (1960), one of the highest grossing Bollywood films of all time.", 
		pic: "images/Anarkali.jpg"

	}]

});