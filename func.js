/* 
ask the user what is he gonna choose
the user can choose using one of the buttons 
whereas the computer turn is chosen randomly and displayed 
*/

const buttons = document.querySelectorAll('.buttons');
const icons = document.querySelectorAll('.icon'); 
const computer_score = document.querySelector("#c-score");
const player_score = document.querySelector("#p-score");
const reset_button = document.querySelector("#reset-button");
const finalWinner = document.querySelector("#winner");
const roundNo = document.querySelector("#round");
let rounds = 0; 
let C_score = 0;
let P_score = 0;

function computerPlay(){
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function winner(playerSelection, computerSelection){
    // paper vs rock
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        return "c";
    }
    if(playerSelection == 'paper' && computerSelection == 'rock'){
        return "p";
    }

    // scissors vs rock
    if(playerSelection == 'scissors' && computerSelection == 'rock'){
        return "c";
    }
    if(playerSelection == 'rock' && computerSelection == 'scissors'){
        return "p";
    }

    // paper vs scissors
    if(playerSelection == 'paper' && computerSelection == 'scissors'){
        return "c";
    }
    if(playerSelection == 'scissors' && computerSelection == 'paper'){
        return "p";
    }
    return "t"

}

function reset(){
    C_score = 0;
    P_score = 0;
    rounds = 0;
    computer_score.textContent = "0";
    player_score.textContent = "0"; 
    roundNo.innerText = "round = 0";
    finalWinner.innerText = "";
    removeSelection();
}
function finalResult(){
    if(P_score > C_score){
        finalWinner.innerText = "player wins!";
    }
    else if (C_score > P_score){
        finalWinner.innerText = "computer wins!";
    }
    else{
        finalWinner.innerText = "it's a tie!";
    }
}
function selectImages(playerChoice,computerChoice){
    let playerIcon = document.querySelector(`#player-${playerChoice}`);
    let compuerIcon = document.querySelector(`#computer-${computerChoice}`);
    playerIcon.classList.add("selectionEffect");
    compuerIcon.classList.add("selectionEffect");
}
function removeSelection(){
    icons.forEach(icon => icon.classList.remove("selectionEffect"))
}
    

function playGame(){
    let result; 
    let PS, CS;
    buttons.forEach(button => button.addEventListener('click', function(){
        removeSelection();
        rounds++;
        roundNo.innerText = "round = " + rounds;
        PS = button.textContent.trim();
        CS = computerPlay();
        selectImages(PS,CS);
        result = winner(PS,CS);
        if(result=="p"){
            P_score++;
            player_score.textContent = P_score;
        }
        else if (result=="c"){
            C_score++;
            computer_score.textContent = C_score;
        }
        else{
        }
        if (rounds == 10){
            finalResult();
            setTimeout(reset,2500)
        }
    }))
}

playGame();