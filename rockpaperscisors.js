function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
  }
  
  function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
      return "It's a tie !";
    } else if (
      (computerSelection === "rock" && playerSelection === "scissors") ||
      (computerSelection === "paper" && playerSelection === "rock") ||
      (computerSelection === "scissors" && playerSelection === "paper")
    ) {
      return (
        "You lose ! " + computerSelection + " beats " + playerSelection + "."
      );
    } else {
      return "You win ! " + playerSelection + " beats " + computerSelection + ".";
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    const buttons = document.querySelectorAll(".selection");
  
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const playerSelection = e.target.id;
        const computerSelection = getComputerChoice();
        console.log("You choose " + playerSelection + ".");
        console.log("The computer chose " + computerSelection + ".");
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
  
        const resultDiv = document.querySelector("#result");
        resultDiv.textContent = roundResult;
  
        if (roundResult.includes("win")) {
          playerScore++;
        } else if (roundResult.includes("lose")) {
          computerScore++;
        }
  
        const scoreDiv = document.querySelector("#score");
        scoreDiv.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  
        if (playerScore === 5) {
          alert("You win the game!");
          playerScore = 0;
          computerScore = 0;
          scoreDiv.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        } else if (computerScore === 5) {
          alert("You lose the game!");
          playerScore = 0;
          computerScore = 0;
          scoreDiv.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        }
      });
    });
  }
  
  game();
  