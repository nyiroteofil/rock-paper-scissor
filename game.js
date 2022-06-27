let playerScore = 0;
let compScore =  0;
let winner = "";

function computerPlay() {
    let options = ["rock", "paper", "scissor"];
    let R = Math.floor(Math.random() * 3);
    return options[R];
}

function playRound(playerChoice, computerChoice) {
    /*Making user input case insensitive*/ 
    let /*Case Insesitive playerChice*/ CIP = playerChoice.toLowerCase(); 

    if (CIP === "rock" && computerChoice === "scissor" || CIP === "paper" && computerChoice === "rock"|| CIP === "scissor" && computerChoice === "paper") {
        playerScore++;
        return `You win! ${playerChoice} beats ${computerChoice}!
        Round: ${playerScore + compScore} Your score: ${playerScore} : Enemy's score: ${compScore}
        `;
    } else {
        compScore++;
        return `You lost! ${computerChoice} beats ${playerChoice}!
        Round: ${playerScore + compScore} Your score: ${playerScore} : Enemy's score: ${compScore}
        `;
        
    }
}

function game() {

for (let i = 0; i < 5; i++) {
    console.log(`Round: ${i}
    Your score: ${playerScore} : Enemy's score: ${compScore}`);
    let playerChoice = prompt("What is your weapos of choice? :", "rock");
    playRound(playerChoice, computerPlay());
}

if (playerScore === 3) {
    winner = "you";
} else {
    winner = "the computer";
}

console.log(`${winner} won the game!`);
}

game();
