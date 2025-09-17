console.log('Hello World');

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