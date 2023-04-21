
function getComputerChoice () {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3 );
    return options[randomNumber];
}


    function playRound(playerSelection, computerSelection) {
        
        
        if (computerSelection === playerSelection) {
            return "It's a tie !";
        } else if (
            (computerSelection === "rock" && playerSelection === "scissors") ||
            (computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "scissors" && playerSelection === "paper")
        ){
         return "You lose ! " + computerSelection + " beats " + playerSelection;
        } else {
            return "You win ! " + playerSelection + " beats " + computerSelection;
        }
       
    
    }
    
    const playerSelection = "rock";
    let result = playRound(playerSelection, getComputerChoice());
    console.log(result);
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i<5; i++) {
        const playerSelection = prompt("You choose Rock, Paper or Scissors").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log ("You choose " + playerSelection + ".");
        console.log("The computer chose " + computerSelection + ".");
        const roundResult = playRound(playerSelection, computerSelection);
        console.log (roundResult);
        if (roundResult.includes("win")){
            playerScore ++;
        } else if (roundResult.includes("lose")){
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("you win the game!");
    } else if (computerScore > playerScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is tied!");
    }
}

game();

   
    
    
   
       
   