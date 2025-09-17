console.log('Hello World');

function getComputerChoice() {
    randomNum = Math.random();
    if (randomNum < 1/3) return "rock";
    if (randomNum > 2/3) return "paper";
    return "scissors";
}