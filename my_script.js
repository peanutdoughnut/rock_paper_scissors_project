/*for(let i=0; i<5; i++){
let userChoice = prompt("Enter rock, paper or scissors: ");

userChoice = userChoice.toLowerCase(userChoice);

console.log(userChoice);
alert(userChoice);
} */

function getComputerChoice(){
    let num = Math.random();
    let computerChoice;
    if (num <= 0.3){ 
         computerChoice = 'rock'
        }
        else if (num >0.3 && num <+ 0.6){
            computerChoice = 'paper'
        }
            else if (num >0.6 && num <= 1){
                computerChoice = 'scissors'
            }
    return computerChoice;
}


const computerSelection = getComputerChoice();
console.log(computerSelection);
alert(computerSelection);