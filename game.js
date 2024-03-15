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
let playerSelection = prompt("Please enter your Rock, Paper, or Scissors");
let computerChoice = getComputerChoice ();


// 
function playRound(playerSelection, computerChoice) {
  // First Possibility
  if (computerChoice === "Rock" && playerSelection === "Paper") {
    return "You Won! :)"
  }
  else if (computerChoice === "Paper" && playerSelection === "Rock") {
    return "You Lost :("
  }

  // Second Possibility
  else if (computerChoice === "Rock" && playerSelection === "Scissors") {
    return "You Lost :("
  }
  else if (computerChoice === "Scissors" && playerSelection === "Rock") {
    return "You Won! :)"
  }

  // Third Possibility
  else if (computerChoice === "Paper" && playerSelection === "Scissors") {
    return "You Won :)"
  }

  else if (computerChoice === "Scissors" && playerSelection === "Paper") {
    return "You lost :("
  }

  // Third Possibility
  else if (computerChoice === "Rock" && playerSelection === "Rock") {
    return "It's a Draw :o"
  }
  else if (computerChoice === "Paper" && playerSelection === "Paper") {
    return "It's a Draw :o"
  }
  else if (computerChoice === "Scissors" && playerSelection === "Scissors") {
    return "It's a Draw :o"
  }
}
console.log(getComputerChoice());

console.log(playRound(playerSelection, computerChoice));
