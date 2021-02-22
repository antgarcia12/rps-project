function letsPlay(player1, player2) {
    if (player1 === player2) {
        return 'tie'; 
    }

    if (player1 === 'scissors' && player2 === 'paper') {
            return 'player 1 wins';
    }

    if (player1 === 'paper' && player2 === 'rock') {
        return 'player 1 wins';
    }

    if (player1 === 'rock' && player2 === 'scissors') {
        return 'player 1 wins';
    }

    else {
        return 'player 2 wins';
    }

}

console.log(letsPlay('paper', 'paper'));





