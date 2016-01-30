

	// global variables
	var computerScore = 0
	var myScore = 0
	
	// INSERT SCORES
	var myScoreBox = document.getElementById('myScore');
	var computerScoreBox = document.getElementById('computerScore');
	
	myScoreBox.innerHTML = computerScore;
	computerScoreBox.innerHTML = myScore;
	
	var playerChoice = document.getElementById('playerChoice');
	var computerChoice = document.getElementById('computerChoice')


	function compare(choice1, choice2) {
	
		choice2 = Math.random();
		if (choice2 < 0.34) {
		    choice2 = "rock";
		} else if(choice2 <= 0.67) {
		    choice2 = "paper";
		} else {
			choice2 = "scissors";
		}
		
		playerChoice.innerHTML = choice1;
		computerChoice.innerHTML = choice2;
		
			    
	    if (choice1 == choice2) {
	        return false;
	    }
	    if (choice1 == "rock") {
	    	if (choice2 == "scissors") {
	 
	            myScore++;         
	        }
	        else {
	            computerScore++;
	        }
	        return updateScores();
	    }
	    if (choice1 == "paper") { 	
	        if (choice2 == "rock") {
	            myScore++;
	        }
	        else {
	            computerScore++;
	        }
	        return updateScores();
	    }
	    if (choice1 == "scissors") {
	    
	        if (choice2 == "rock") {
	            computerScore++;
	        }
	        else {
	            myScore++;
	        }
	        return updateScores();
	    }
	}
	
	function updateScores() {
		myScoreBox.innerHTML = myScore;
		computerScoreBox.innerHTML = computerScore;
	}
	
	
	
