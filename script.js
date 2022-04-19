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
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    else if (computerIndex === loseToIndex) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    return `It's a draw! Both players chose ${computerSelection}!`;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = "";
        let validChoice = false;

        while (!validChoice) {
            playerSelection = prompt("Rock, Paper, or Scissors?");
            playerSelection = playerSelection.toLowerCase();
            playerSelection = playerSelection.charAt(0).toUpperCase() +
                              playerSelection.slice(1);

            if (options.includes(playerSelection)) { validChoice = true }
            else { alert("Invalid selection!") }
        }

        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
