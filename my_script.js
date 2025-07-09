function getComputerChoice()
{
    return Math.random();
}

let num = Math.random();

    if(num <= 0.3)
    {
        computerChoice ='Rock';
    }
    else if(num >0.3 && num <= 0.6)
    {
        computerChoice ='Paper';
    }
    else if(num >0.6 && num <= 1)
    {
        computerChoice = 'scissors';
    }
 console.log(computerChoice);