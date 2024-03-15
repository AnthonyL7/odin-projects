// Try to get computer to output a random word between Rock, Paper, and Scissors

let randomNumber = Math.floor(Math.random() * 4);

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

getComputerChoice();

console.log(getComputerChoice());