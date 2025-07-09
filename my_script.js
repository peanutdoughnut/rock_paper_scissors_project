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

 if(humanChoice == computerChoice)
 {
    console.log("draw");
 }
else if(humanChoice == 'rock' && computerChoice == 'paper')
{
    console.log("You lose!");
}
else if(humanChoice == "paper" && computerChoice == "rock")
{
    console.log("You Win!");
}
else if(humanChoice == "paper" && computerChoice == "scissors")
{
    console.log("You lose!");
}
else if(humanChoice == "scissors" && computerChoice == "paper")
{
    console.write("You win!");
}
else if(humanChoice == "scissors" && computerChoice == "rock")
{
    console.log("You lose!");
}
else if(humanChoice == "rock" && computerChoice == "scissors")
{
    console.log("You win!");
} 

