function computerPlay() {
    let options = ["rock", "paper", "scissor"];
    let R = Math.floor(Math.random() * 3);
    return options[R];
}

function playRound(playerChoice, computerChoice) {
    
    const counter = document.querySelector('#rCounter');
    const pScore = document.querySelector('#playerScore');
    const container = document.querySelector('#results');
    const eScore = document.querySelector('#enemyScore');

    if (playerChoice === "rock" && computerChoice === "scissor" || playerChoice === "paper" && computerChoice === "rock"|| playerChoice === "scissor" && computerChoice === "paper") {
        
        let currentScore = parseInt(pScore.textContent) + 1;
        pScore.textContent = currentScore;

        let item = document.createElement('p');
        item.textContent = `Round ${counter.textContent} | You win this round! ${playerChoice} beats ${computerChoice}!`;
        container.appendChild(item);
    } else if(playerChoice === computerChoice) {
        let item = document.createElement('p');
        item = `Round: ${counter.textContent} | It's a tie!`;
        container.appendChild(item);
    } else {
        let currentScore = parseInt(eScore.textContent) + 1;
        eScore.textContent = currentScore;

        let item = document.createElement('p');
        item.textContent = `Round: ${counter.textContent} | You lost this round! ${computerChoice} beats ${playerChoice}!`;   
        container.appendChild(item);
    }

    let currentRound = parseInt(counter.textContent);
    counter.textContent = currentRound + 1;
}

function game(playerChice, computerChoice) {

const pScore = document.querySelector('#playerScore');
const eScore = document.querySelector('#enemyScore')
const container = document.querySelector('#results');

playRound(playerChice, computerChoice);

if (pScore.textContent >= 5) {
    let outputScore = document.createElement('p')
    outputScore.textContent = `You won this fight!
     Congratulations! Reload the page to play
     again`;
    container.appendChild(outputScore);
    
    let rock = document.querySelector('#rock');
    rock.id = "endGame";

    let paper = document.querySelector('#paper');
    paper.id = "endGame";

    let scissor = document.querySelector('#scissor');
    scissor.id = "endGame";

} else if (eScore.textContent >= 5) {
    let outputWinner = document.createElement('p')
    outputWinner.textContent =`Saddly you lost this game...
    Don't get sad just yet, you can try again any time!

    Reload the page to play again`;
    container.appendChild(outputWinner);

    let rock = document.querySelector('#rock');
    rock.id = "endGame";

    let paper = document.querySelector('#paper');
    paper.id = "endGame";

    let scissor = document.querySelector('#scissor');
    scissor.id = "endGame";
}

const msg = document.createElement('p');
msg.textContent = resultMsg;
container.appendChild(msg);

let item = document.createElement('p');
item.textContent = 'Hi, this is a test'
container.appendChild(item)
}


let buttonRock = document.querySelector('#rock');

buttonRock.addEventListener('click', () => {
    game('rock', computerPlay());
})

let buttonPaper = document.querySelector('#paper');

buttonPaper.addEventListener('click', () => {
    game('paper', computerPlay());
})

let buttonScissor = document.querySelector('#scissor');

buttonScissor.addEventListener('click', () => {
    game('scissor', computerPlay());
})