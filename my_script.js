//computer choice function
function getComputerChoice()
{
    let num = Math.random();
    let computerChoice;
    if (num <= 0.3){ 
      computerChoice = 'rock'
    }
    else if (num >0.3 && num <= 0.6){
            computerChoice = 'paper'
   }
    else if (num >0.6 && num <= 1){
                computerChoice = 'scissors'
   }
    return computerChoice;
}
// play round function
function playRound(humanSelection, computerSelection) {
    
    //humanSelection = userChoice ;

    if (humanSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return "You win! " + humanSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + humanSelection;
    }
} 



//loop section
for(let i=0; i<5; i++){
 let userChoice = prompt("Enter rock, paper or scissors: ");
 userChoice = userChoice.toLowerCase();
const computerSelection = getComputerChoice();
const humanSelection = userChoice;
console.log(`computer:${computerSelection}`);
 playRound(humanSelection, computerSelection);
 
}

//user choice function


/*console.log(userChoice);
alert(userChoice);*/



