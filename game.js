function computerPlay() {
    let options = ["rock", "paper", "scissor"];
    let R = Math.floor(Math.random() * 3);
    return options[R];
}

function playRound(playerChoice, computerChoice) {
    /*Making user input case insensitive*/ 
    let /*Case Insesitive playerChice*/ CIP = playerChoice.ToLower(); 

    if (CIP === "rock" && computerChoice === "scissor" || CIP === "paper" && computerChoice === "rock"|| CIP === "scissor" && computerChoice === "paper") {
        return `You win! ${playerChoice} beats ${computerChoice}`;
        playerScore++;
    } else {
        return `You lost! ${computerChoice} beats ${playerChoice}\n Round: ${playerScore + compScore}\nYour score: ${playerScore} : Enemy's score: ${compScore}`;
        compScore++;
    }
}

function game() {
const playerScore = 0;
const compScore =  0;
const winner = "";

console.log(`Round: ${playerScore + compScore}\nYour score: ${playerScore} : Enemy's score: ${compScore}`)

while (playerScore < 3 && compScore < 3) {
    let playerChoice = prompt("What is your weapos of choice? :", "rock");

    playRound(playerChoice, computerPlay);
}

if (playerScore === 3) {
    winner = "you";
} else {
    winner = "the computer";
}

console.log(`${winner} won the game!`);
}

game();