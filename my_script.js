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
    
    //score counters
    let humanScore = 0;
    let computerScore = 0; 

    if (humanSelection === computerSelection) {
        humanScore++;
        computerScore++;
        alert('it is a Tie');
    } else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        humanScore++;
        alert(`you win! ${humanSelection} beats ${computerSelection}`);
      
    } else {
        //
        computerScore++;
        alert(`You lose! ${computerSelection}   beats ${humanSelection} `);
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

//display results

/*const [compTotal, humanTotal] = playRound();

if(compTotal == humanTotal){
    alert("It's a tie!");
}
else if(compTotal > humanTotal){
    alert("You lose! Computer wins!");
}
else if(compTotal < humanTotal){
    alert("You win! Human wins!");
}

/*console.log(userChoice);
alert(userChoice);*/



