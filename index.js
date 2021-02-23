function letsPlay(player1, player2) {
    if (player1 === player2) {
        return 'tie'; 
    }

    if (player1 === 'scissors' && player2 === 'paper') {
            return 'You Win!';
    }

    if (player1 === 'paper' && player2 === 'rock') {
        return 'You Win!';
    }

    if (player1 === 'rock' && player2 === 'scissors') {
        return 'You Win!';
    }

    else {
        return 'YOU LOSE! :(';
    }

}

//Events and Event Listeners
/*
Events: any interaction the user has with a page
click, hover, scrolling onto a particular section, doublechecking
*/

//When I click on a button, log the value of that button to the console "rock", "paper", "scissors"

// function logValue(event) {
//     console.log(event.target.value);
// }

function playGame(event) {
    let userChoice = event.target.value;

    let options = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * options.length);

    let computerChoice = options[randomIndex];

    let winner = letsPlay(userChoice, computerChoice);

    let userChoiceText = `The user chose ${userChoice}\n`;
    let compChoiceText = `The computer chose ${computerChoice}\n`;
    let finalText = userChoiceText + compChoiceText + winner;

    let winnerLocation = document.querySelector(".choices");
    winnerLocation.innerText = finalText;

    console.log(winner);

}
let buttons = document.getElementsByClassName("rps");
let button2 = document.querySelectorAll(".rps");
// add an event listener to each button
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.onclick = playGame;
}


