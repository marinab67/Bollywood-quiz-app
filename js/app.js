$(document).ready(function(){ 

	$(".quiz-area").hide();
	$(".answer-screen").hide();

	function submit () { 
		$(".quiz-area").hide();
		$(".answer-screen").show();
	}

	$(".start-button").click(function() { 
		$(".start").hide();
		$(".quiz-area").show();
	});

	$(document).on("click", ".submit-button", submit);








});