$(document).ready(function(){ 

	$(".qanda").hide();
	$(".answer-screen").hide();

	function submit () { 
		$(".qanda").hide();
		$(".answer-screen").show();
	}

	$(".start-button").click(function() { 
		$(".start").hide();
		$(".qanda").show();
	});

	$(document).on("click", ".submit-button", submit);








});