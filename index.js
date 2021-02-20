function letsPlay(player1, player2) {
    if (player1 === player2) {
        return 'tie';
    }

    if (player1 === 'scissors' && player2 === 'paper') {
            return 'player 1 wins';
    }
     else if (player1 === 'scissors' && player2 === 'rock') {
                return 'player 1 loses';
    }

    if (player2 === 'scissors' && player1 === 'paper') {
        return 'player 2 wins';
    }
    else if (player2 === 'scissors' && player1 === 'rock') {
                return 'player 2 loses';
    }

    if (player1 === 'paper' && player2 === 'rock') {
        return 'player 1 wins';
    }
    else if (player1 === 'paper' && player2 === 'scissors') {
                return 'player 1 loses';
    }

    if (player2 === 'paper' && player1 === 'rock') {
        return 'player 2 wins';
    }
    else if (player2 === 'paper' && player1 === 'scissors') {
                return 'player 2 loses';
    }

    if (player1 === 'rock' && player2 === 'scissors') {
        return 'player 1 wins';
    }
    else if (player1 === 'rock' && player2 === 'paper') {
                return 'player 1 loses';
    }

    if (player2 === 'rock' && player1 === 'scissors') {
        return 'player 2 wins';
    }
    else if (player2 === 'rock' && player1 === 'paper') {
                return 'player 2 loses';
    }

}

console.log(letsPlay('paper', 'scissors'));





