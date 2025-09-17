console.log('Hello World');
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 1/3) return "rock";
    if (randomNum > 2/3) return "paper";
    return "scissors";
}

function getHumanChoice() {
    while (true) {
        const input = prompt("Rock, Paper, or Scissors?").toLowerCase();
        if (["rock", "paper", "scissors"].includes(input)) return input;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Tie!");
        return;
    }
    if (humanChoice == "rock") {
        switch (computerChoice) {
            case "paper":
                console.log("You Lose! Paper Beats Rock.")
                humanScore -= 1;
                computerScore += 1;
                break;
            case "scissors":
                console.log("You Win! Rock Beats Scissors.")
                humanScore += 1;
                computerScore -= 1;
                break;
        }
    } else if (humanChoice == "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("You Win! Paper Beats Rock.");
                humanScore += 1;
                computerScore -= 1;
                break;
            case "scissors":
                console.log("You Lose! Scissors Beats Paper.");
                humanScore -= 1;
                computerScore += 1;
                break;
        }
    } else if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "rock":
                console.log("You Lose! Rock Beats Scissors.");
                humanScore -= 1;
                computerScore += 1;
                break;
            case "paper":
                console.log("You Win! Scissors Beats Paper.");
                humanScore += 1;
                computerScore -= 1;
                break;
        }
    }
} 