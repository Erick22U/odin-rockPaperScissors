const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 3);

  switch (number) {
    case 0:
      return "Rock";
    case 1:
      return "Scissors";
    case 2:
      return "Paper";
  }
};



const getPlayerChoice = (button) => {
    const id = button.getAttribute('id');
    if(id === "rockBtn") return "Rock";
    else if(id === "paperBtn") return "Paper";
    else return "Scissors";
}

const buttons = document.querySelectorAll('.btn')



buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = getPlayerChoice(button);
        console.log(playerChoice)
    })
});
