const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn"); 
const scissorbtn = document.getElementById("scissor-btn");
const userChoice = document.getElementById("user-choice"); 
const computerChoice = document.getElementById("computer-choice");
const result = document.getElementById("result");
const userScore = document.getElementById("user-score"); 
const computerScore = document.getElementById("computer-score");

let cmpScore = 0; 
let usrScore = 0;
const increment = (string) => {
    if(string=="Computer")
    {
        cmpScore++
        computerScore.InnerHTML = cmpScore;
    }

    else if(string=="Computer")
    {
        usrScore++
        usrScore.InnerHTML = usrScore;
    }

}

const runGame = (name) =>{
const userInput = name; 
const values = ["Rock", "Paper", "Scissor"];
const randomNumber = Math.floor(Math.random() * 3); 
const computerInput = values[randomNumber];

userChoice.innerHTML = "You pick " + userInput; 
computerChoice.innerHTML = "Computer pick " + computerInput;

if(userInput == "Rock") {
if(computerInput == "Rock")
{
result.innerHTML = "Draw";
}
else if(computerInput == "Paper")
{
    result.innerHTML = "You Lose";
    increment('Computer');
}
else (computerInput == "Scissor")
{
    result.innerHTML = "You Win";
    increment('User');
}
}

if(userInput == "Paper") {
    if(computerInput == "Paper")
    {
    result.innerHTML = "Draw";
    }
    else if(computerInput == "Scissor")
    {
        result.innerHTML = "You Lose";
        increment('Computer');
    }
    else(computerInput == "Rock")
    {
        result.innerHTML = "You Win";
        increment('User');
    }
    }

    if(userInput == "Scissor") {
        if(computerInput == "Scissor")
        {
        result.innerHTML = "Draw";
        }
        else if(computerInput == "Rock")
        {
            result.innerHTML = "You Lose";
            increment('Computer');
        }
        else (computerInput == "Paper")
        {
            result.innerHTML = "You Win";
            increment('User');
        }
        }


}


rockBtn.addEventListener("click",() => {
runGame("Rock");
});

paperBtn.addEventListener("click",() => {
runGame("Paper");
});

scissorbtn.addEventListener("click",() => {
runGame("Scissor");
});
        