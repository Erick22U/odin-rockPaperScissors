const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 100) + 1;
  if (number < 33) return "Rock";
  else if (number > 66) return "Scissors";
  else return "Paper";
};

const winMessage = (playerSelection, computerSelection) => {
  return "You win! " + playerSelection + " beats " + computerSelection;
};

const loseMessage = (computerSelection, playerSelection) => {
  return "You Lose! " + computerSelection + " beats " + playerSelection;
};

const playRound = (playerSelection, computerSelection) => {
  // A win will be 3, a loss 0, and a tie is 1
  if (playerSelection == computerSelection) {
    console.log("It's a tie you both chose " + playerSelection);
    return 1;
  }

  if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      consoel.log(loseMessage(computerSelection, playerSelection));
      return 0;
    } else {
      console.log(winMessage(playerSelection, computerSelection));
      return 3;
    }
  }

  if (playerSelection == "Paper") {
    if (computerSelection == "Scissors") {
      console.log(loseMessage(computerSelection, playerSelection));
      return 0;
    } else {
      console.log(winMessage(playerSelection, computerSelection));
      return 3;
    }
  }

  if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      consoel.log(loseMessage(computerSelection, playerSelection));
      return 0;
    } else {
      console.log(winMessage(playerSelection, computerSelection));
      return 3;
    }
  }
};

function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose either: Rock, Paper or Scissors");
    playerSelection =
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    let computerSelection = getComputerChoice();
    let roundWinnner = playRound(playerSelection, computerSelection);

    if (roundWinnner == 3) playerWins++;
    if (roundWinnner == 0) computerWins++;
  }

  if (playerWins > computerWins) {
    console.log("The player wins");
  } else if (computerWins > playerWins) {
    console.log("The computer wins");
  } else {
    console.log("It's a tie!");
  }
}

game();
