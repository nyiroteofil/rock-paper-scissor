function computerPlay() {
    let options = ["rock", "paper", "scissor"];
    let R = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    return options[R];
}

function playRound(playerChoice, computerChoice) {
    /*Making user input case insensitive*/ 
    let /*Case Insesitive playerChice*/ CIP = player.ToLower(); 

    if (CIP === "rock" && computerChoice === "scissor" || CIP === "paper" && computerChoice === "rock"|| CIP === "scissor" && computerChoice === "paper") {
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        return `You lost! ${computerChoice} beats ${playerChoice}`;
    }
}

console.log(computerPlay());