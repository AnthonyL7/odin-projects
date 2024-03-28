// Try to get computer to output a random word between Rock, Paper, and Scissors

let randomNumber = Math.floor(Math.random() * 3);

function getComputerChoice () {
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
let playerSelection = prompt("Please enter your Rock, Paper, or Scissors").toLowerCase();
let computerChoice = getComputerChoice ();
let computerScore = 0;
let playerScore = 0;

// Make a function called playRound to play one round
function playRound(playerSelection, computerChoice) {
  // First Possibility
  //Player wins
  if (computerChoice === "Rock" && playerSelection === "Paper") {
    return "You Won! :)"
  }
  else if (computerChoice === "Rock" && playerSelection === "Paper") {
    return computerScore = 1;
  }

  // Player loses
  else if (computerChoice === "Paper" && playerSelection === "Rock") {
    return "You Lost :("
  }
  else if (computerChoice === "Paper" && playerSelection === "Rock") {
    return computerScore = 1;
  }

  // Second Possibility
  // Player loses
  else if (computerChoice === "Rock" && playerSelection === "Scissors") {
    return "You Lost :("
  }
  else if (computerChoice === "Rock" && playerSelection === "Scissors") {
    return computerScore = 1;
  }

  //Player wins
  else if (computerChoice === "Scissors" && playerSelection === "Rock") {
    return "You Won! :)"
  }
  else if (computerChoice === "Scissors" && playerSelection === "Rock") {
    return playerScore = 1;
  }

  // Third Possibility
  else if (computerChoice === "Paper" && playerSelection === "Scissors") {
    return "You Won :)"
  }
  else if (computerChoice === "Paper" && playerSelection === "Scissors") {
    return playerScore = 1;
  }

  // Fourth Possibility
  else if (computerChoice === "Scissors" && playerSelection === "Paper") {
    return "You lost :("
  }
  else if (computerChoice === "Scissors" && playerSelection === "Paper") {
    return computerScore = 1;
  }

  // Fifth Possibility
  else if (computerChoice === "Rock" && playerSelection === "Rock") {
    return "It's a Draw :o"
  }
  else if (computerChoice === "Rock" && playerSelection === "Rock") {
    return computerScore = 0;
    return playerScore = 0;
  }

  else if (computerChoice === "Paper" && playerSelection === "Paper") {
    return "It's a Draw :o"
  }
  else if (computerChoice === "Paper" && playerSelection === "Paper") {
    return computerScore = 0;
    return playerScore = 0;
  }


  else if (computerChoice === "Scissors" && playerSelection === "Scissors") {
    return "It's a Draw :o"
  }
  else if (computerChoice === "Scissors" && playerSelection === "Scissors") {
    return computerScore = 0;
    return playerScore = 0;
  }
}


// Make a function called playGame to play a five round game that keeps score and reports a winner or loser at the end
function playGame()  {
for (i = 0; i < 5; i++) {
  playerSelection = prompt("Please enter your Rock, Paper, or Scissors").toLowerCase();
  computerChoice = getComputerChoice();
  playRound(playerSelection, computerChoice);
  console.log('Player Score', playerScore, 'Computer Score', computerScore)
}

let winningScore = 3;
if (winningScore = 3 && playerScore = 3) {
  return "Congrats you won!"
}
else if (winningScore = 3 && playerScore = 3) {
  
}



}

playGame();