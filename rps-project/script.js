// Try to get computer to output a random word between Rock, Paper, and Scissors



function getComputerChoice () {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Rock"
  }
  else if (randomNumber === 1) {
    return "Paper"
  }
  else if (randomNumber === 2) {
    return "Scissors"
  }
}

// Make a global variable to prompt the user and call getComputerChoice()
let computerScore = 0;
let playerScore = 0;
let tie = 0;
//playerSelection = prompt("Please enter your Rock, Paper, or Scissors");
// Event listeners 
let Rocks = document.getElementById("rock");
let Papers = document.getElementById("paper");
let Scissors = document.getElementById("scissors");

Rocks.addEventListener("click", playRound);
Papers = addEventListener("click", playRound);
Scissors = addEventListener("click", playRound);
computerSelection = getComputerChoice();

// Make a function called playRound to play one round
function playRound(playerSelection, computerSelection ) {

  // First Possibility
  //Player wins
  if (computerSelection === "Rock" && playerSelection === "Paper") {
    playerScore += 1;
    
  }

  // Player loses
  else if (computerSelection === "Paper" && playerSelection === "Rock") {
   computerScore += 1;
  }

  // Second Possibility
  // Player loses
  else if (computerSelection === "Rock" && playerSelection === "Scissors") {
   computerScore += 1;
  }

  //Player wins
  else if (computerSelection === "Scissors" && playerSelection === "Rock") {
   playerScore += 1;
  }

  // Third Possibility
  else if (computerSelection === "Paper" && playerSelection === "Scissors") {
    playerScore += 1;
    
  }

  // Fourth Possibility
  else if (computerSelection === "Scissors" && playerSelection === "Paper") {
   computerScore += 1;
 
  }

  // Fifth Possibility
  else if (computerSelection === "Rock" && playerSelection === "Rock") {
    tie +=1;
  }

  else if (computerSelection === "Paper" && playerSelection === "Paper") {
    tie +=1;
  }


  else if (computerSelection === "Scissors" && playerSelection === "Scissors") {
    tie +=1;
  }
}


// Make a function called playGame to play a five round game that keeps score and reports a winner or loser at the end
/*function playGame()  {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Please enter your Rock, Paper, or Scissors");
    computerSelection = getComputerChoice();
    console.log("Player Selection:", playerSelection);
    console.log("Computer Selection:", computerSelection);
    playRound(playerSelection, computerSelection);
    console.log('Player Score: ', playerScore, 'Computer Score: ', computerScore, 'Tie: ', tie);
  }

  if (playerScore > computerScore){
    console.log("Congrats you won")
  } else if (playerScore < computerScore){
    console.log("Sorry you lost");
  } else{
    console.log("It's a tie")
  }
}; */


console.log(playRound(playerSelection, computerSelection));