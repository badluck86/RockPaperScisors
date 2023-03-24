
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

   
    
    
   
       
   