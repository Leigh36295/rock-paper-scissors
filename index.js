/* logic to get the computer to pick a choice at random*/

function getComputerChoice() {

let computerChoice = (Math.random()); 

    if (computerChoice < 0.33) {
        return("rock")
    } else if (computerChoice < 0.66) {
        return ("paper")
    } else {
        return ("scissors")
    }
}

console.log(getComputerChoice());

/*creates a prompt allowing user input*/
function getHumanChoice() {
    const choice = (window.prompt("Choose your weapon!"));
    if (choice == "rock") {
        return "you picked rock";
    } else if (choice == "paper"){
        return "you picked paper";
    } else if (choice == "scissors") {
        return "you picked scissors"
    }
}

    console.log(getHumanChoice());
    
