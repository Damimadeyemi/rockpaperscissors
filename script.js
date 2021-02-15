let result;
let message;
let playerSelection;

 document.getElementById('rock').addEventListener('click',playRock);
 document.getElementById('paper').addEventListener('click',playPaper);
 document.getElementById('scissors').addEventListener('click',playScissors);
    

 function playRock(){
     playerSelection = "rock";
     game();
 }

 function playPaper(){
    playerSelection = "paper";
    game();
}
function playScissors(){
    playerSelection = "scissors";
    game();
}





function computerPlay(){
    let arr = ["rock", "paper", "scissors"];

    var randomPlay = Math.floor(Math.random()*arr.length);

    return arr[randomPlay];
    }

   

    function playRound(playerSelection,computerSelection){
    
        if (playerSelection == "rock" && computerSelection == "paper"){
            return [message = "You lose, paper beats rock!", result = "loss"];

        } 
        else if (playerSelection == "rock" && computerSelection == "scissors"){
            return [message = "Rock beats scissors, you win", result = "win"];
        }
      
        else if (playerSelection == "paper" && computerSelection == "rock"){
            return [message = "You win, paper beats rock", result = "win"];
        }
        else if (playerSelection == "paper"  && computerSelection == "scissors"){
            return [message = "You lose, scissors beats paper", result = "loss"];

        }
        else if (playerSelection == "scissors"  && computerSelection == "rock"){
            return [message = "You lose, rock beats scissors", result = "loss"];

        }
        else if (playerSelection == "scissors"  && computerSelection == "paper"){
            return [message = "You win, scissors beats paper", result = "win"];

        }
        else{
            return [message = "it's a tie", result = "tie"];
        }


    }
    let score = 0;

    function game(){
        computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);

        

        if (result == "win" && score <= 5){
            score++;
        } else if(score == 5){
            score = 0;
        }else{
            score = score;
        }

        document.getElementById('score').innerHTML = score;

        document.getElementById('myturn').innerHTML = playerSelection;
        document.getElementById('computerplay').innerHTML = computerSelection;
        document.getElementById('winorlose').innerHTML = message;

    }

