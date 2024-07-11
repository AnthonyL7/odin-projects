// Make a global variable to prompt the user and call getComputerChoice()
let computerScore = 0;
let playerScore = 0;
let tie = 0;

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

// Event listeners 
//let Rocks = document.getElementById("rock");
//let Papers = document.getElementById("paper");
//let Scissors = document.getElementById("scissors");

//Rocks.addEventListener("click", () => playRound("Rock"));
//Papers.addEventListener("click", () => playRound("Paper"));
//Scissors.addEventListener("click", ()=> playRound("Scissors"));


// Make a function called playRound to play one round
function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let result = ""
    // First Possibility
    //Player wins
    if ((computerSelection === "Rock" && playerSelection === "Paper") ||
       (computerSelection === "Scissors" && playerSelection === "Rock") || 
       (computerSelection === "Paper" && playerSelection === "Scissors")
     ) {
      playerScore += 1;
      result = `You win! ${playerSelection} beats ${computerSelection}`;
    }
  
    else if (
      (computerSelection === "Paper" && playerSelection === "Rock") ||
      (computerSelection === "Rock" && playerSelection === "Scissors") ||
      (computerSelection === "Scissors" && playerSelection === "Paper")
    ) {
      computerScore += 1;
      result = `You lose: ${computerSelection} beats ${playerSelection}`;
    }
  
    else {
      tie += 1;
      result = `It's a tie! You both chose ${playerSelection}`;
    }
    document.getElementById("result").innerHTML = `
  ${result}<br>
  Player Score: ${playerScore}<br>
  Computer Score: ${computerScore}<br>
  Ties: ${tie}`;
  }

  document.addEventListener("DOMContentLoaded", function(){
    let Rocks = document.getElementById("rock");
    let Papers = document.getElementById("paper");
    let Scissors = document.getElementById("scissors");

    Rocks.addEventListener("click", () => playRound("Rock"));
    Papers.addEventListener("click", () => playRound("Paper"));
    Scissors.addEventListener("click", ()=> playRound("Scissors"));

  });






