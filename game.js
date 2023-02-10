//Scores for the player and computer
let playerScore = 0;
let computerScore = 0;
let roundWinnner = "";

//get the choice for the computer
function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);

  switch (number) {
    case 0:
      return "Rock";
    case 1:
      return "Scissors";
    case 2:
      return "Paper";
  }
}

//Play game
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "tie";

  if (
    (playerChoice == "Rock" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Scissors") ||
    (playerChoice == "Scissors" && computerChoice == "Rock")
  ) {
    computerScore++;
    roundWinnner = "computer";
  } else {
    playerScore++;
    roundWinnner = "player";
  }
}

//is game over
function isGameOver() {
  if (computerScore == 5 || playerScore == 5) {
    console.log("Game over");
    return true;
  } else return false;
}

//updates the choice in the gui
function updateChoiceSelection(playerChoice, computerChoice) {
  switch (playerChoice) {
    case "Rock":
      guiPlayerChoice.innerText = btnSign[0].textContent;
      break;
    case "Paper":
      guiPlayerChoice.innerText = btnSign[1].textContent;
      break;
    case "Scissors":
      guiPlayerChoice.innerText = btnSign[2].textContent;
      break;
  }

  switch (computerChoice) {
    case "Rock":
      guiComputerChoice.innerText = btnSign[0].textContent;
      break;
    case "Paper":
      guiComputerChoice.innerText = btnSign[1].textContent;
      break;
    case "Scissors":
      guiComputerChoice.innerText = btnSign[2].textContent;
      break;
  }
}

//Updates the score in the gui
function updateScore(){

    switch(roundWinnner){
        case "tie":
            console.log("It's a tie");
            break;
        case "lose":
            console.log("You lost this round!!!");
            break;
        case "win":
            console.log("You won this round, keep it up!");
            break
    }

    guiCompScore.innerText = "Computer: " + computerScore
    guiPlayerScore.innerText = "Player: " + playerScore
}
// Starts the game and decides winner
function onClick(playerChoice) {
  isGameOver();

  const computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  updateChoiceSelection(playerChoice, computerChoice);
  updateScore()

  isGameOver()
}

// Get all the buttons
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

//get text where the choices is placed
const guiPlayerChoice = document.getElementById("playerChoice");
const guiComputerChoice = document.getElementById("computerChoice");

//button signs
const btnSign = document.getElementsByClassName("sign");

//Scoreboard 
const guiPlayerScore = document.getElementById('playerScore')
const guiCompScore = document.getElementById('computerScore');
//Adding events to all buttons
rockBtn.addEventListener("click", () => onClick("Rock"));
paperBtn.addEventListener("click", () => onClick("Paper"));
scissorsBtn.addEventListener("click", () => onClick("Scissors"));
