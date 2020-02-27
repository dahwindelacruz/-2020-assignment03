let rock;
let paper;
let scissors;
let userChoice;
let computerChoice;

function rockPaperScissors () {
    userChoice = window.prompt("Choose rock, paper, or scissors.");
    
    computerChoice = Math.floor(Math.random() * 10) + 1;
    if (computerChoice <= 4) {
        computerChoice = "rock";
    } else if (computerChoice <= 7 >= 5) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    window.console.log(computerChoice);

    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            window.document.write("You lose, paper covers rock!");
        } else if (computerChoice === "scissors") {
            window.document.write("You win, rock destroys scissors!");
        } else {
            window.document.write("It's a tie! You both chose rock.")
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            window.document.write("You win, paper covers rock!");
        } else if (computerChoice === "scissors") {
            window.document.write("You lose, scissors cut paper!");
        } else {
            window.document.write("It's a tie! You both chose paper.");
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            window.document.write("You lose, rock destroys covers scissors!");
        } else if (computerChoice === "paper") {
            window.document.write("You win, scissors cut paper!");
        } else {
            window.document.write("It's a tie! You both chose scissors.");
        }
    } else {
        window.alert("You did not spell rock, paper, or scissors correctly!")
        rockPaperScissors();
        return;
    }
}
rockPaperScissors();