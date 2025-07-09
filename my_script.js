 let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    return Math.random();
}

let num = Math.random();
let computerChoice;

    if(num <= 0.3)
    {
        computerChoice ='rock';
    }
    else if(num >0.3 && num <= 0.6)
    {
        computerChoice ='paper';
    }
    else if(num >0.6 && num <= 1)
    {
        computerChoice = 'scissors';
    }
 console.log(computerChoice); 


 humanChoice = window.prompt("Select Rock ,Paper or Scissors");

 console.log(humanChoice);


function playRound(humanChoice,computerChoice)
{
     if(humanChoice == computerChoice)
 {
    console.log("draw");
 }
else if(humanChoice == 'rock' && computerChoice == 'paper')
{
    computerScore++;
}
else if(humanChoice == "paper" && computerChoice == "rock")
{
    humanScore++;
}
else if(humanChoice == "paper" && computerChoice == "scissors")
{
    computerScore++;
}
else if(humanChoice == "scissors" && computerChoice == "paper")
{
    humanScore++;
}
else if(humanChoice == "scissors" && computerChoice == "rock")
{
    computerScore++;
}
else if(humanChoice == "rock" && computerChoice == "scissors")
{ 
    humanScore++;
} 

}

const computerSelection =computerChoice;
const humanSelection = humanChoice;

playRound(humanSelection,computerSelection);

if(humanScore == computerScore)
{
    window.prompt(`It's a draw!`)
}
else if(humanScore > computerScore)
{
    window.prompt("You win!");
}
else if(humanScore < computerScore)
{
    window.prompt('You lose!');
}
