let options = ["Rock", "Paper", "Scissors"];

function computerPlay() { return options[Math.floor(Math.random() * 3)] };

function playRound(playerSelection, computerSelection) {
    let playerIndex = options.indexOf(playerSelection);
    let computerIndex = options.indexOf(computerSelection);

    let beatsIndex = playerIndex + 2;
    if (beatsIndex > 2) { beatsIndex %= 3 }
    let loseToIndex = playerIndex + 1;
    if (loseToIndex > 2) { loseToIndex %= 3 }

    if (computerIndex === beatsIndex) {
        return [`You Win! ${playerSelection} beats ${computerSelection}`, 1];
    }

    else if (computerIndex === loseToIndex) {
        return [`You Lose! ${computerSelection} beats ${playerSelection}`, 2];
    }

    return [`It's a draw! Both players chose ${computerSelection}!`, 0];
}

function game() {
    const output = document.querySelector('#game-output');
    const score = document.querySelector('#score');
    const btns = document.querySelectorAll('button');
    const question = document.createElement('p');
    question.textContent = "Rock, Paper, or Scissors?";
    output.prepend(question);

    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = "";

    btns.forEach(btn => btn.addEventListener('click', (e) => {
        playerSelection = e.target.id.slice(4);
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        let computerSelection = computerPlay();

        const result = document.createElement('p');
        const resultArr = playRound(playerSelection, computerSelection);
        result.textContent = resultArr[0];
        output.prepend(result);

        if (resultArr[1] === 1) { score.textContent = `Player: ${++playerScore} | Computer: ${computerScore}`}
        else if (resultArr[1] === 2) { score.textContent = `Player: ${playerScore} | Computer: ${++computerScore}`}

        if (playerScore === 5) {
            alert("Congratulations! You've won the game!");
        }

        else if (computerScore === 5) {
            alert("You've lost the game, better luck next time!");
        }
    }));
}

game();
