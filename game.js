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
  if (playerChoice == computerChoice) {
    roundWinnner = "tie";
    return;
  }

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
    if(playerScore == 5){
      result[1].innerText = "Congrats, you beat the computer!"
    }
    else{
      result[1].innerText = "You have lost the war against the machine"
    }
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
function updateScore() {
  switch (roundWinnner) {
    case "tie":
      result[1].innerText = "It's a tie";
      break;
    case "computer":
      result[1].innerText = "You lost this round!!!";
      break;
    case "player":
      result[1].innerText = "You won this round, keep it up!";
      break;
  }

  guiCompScore.innerText = "Computer: " + computerScore;
  guiPlayerScore.innerText = "Player: " + playerScore;
}

function openOverlay() {
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignContent = "center";
}
// Starts the game and decides winner
function onClick(playerChoice) {
  if (isGameOver()) {
    return;
  }

  const computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  updateChoiceSelection(playerChoice, computerChoice);
  updateScore();

  if (isGameOver()) {
    return;
  }
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
const guiPlayerScore = document.getElementById("playerScore");
const guiCompScore = document.getElementById("computerScore");

//Results Announcement
const result = document.getElementsByClassName("announcement");

//Restart Button
const restart = document.getElementById('restart')

//Adding events to all buttons
rockBtn.addEventListener("click", () => onClick("Rock"));
paperBtn.addEventListener("click", () => onClick("Paper"));
scissorsBtn.addEventListener("click", () => onClick("Scissors"));
restart.addEventListener('click', () => location.reload())