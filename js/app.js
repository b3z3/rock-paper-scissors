(function () {
    const options = ['rock', 'paper', 'scissors']

    const computerPlay = () => options[Math.round(Math.random() * 2)];

    const humanPlay = (choice) => options.find((option) => option === choice);

    const playRound = (playerSelection, computerSelection) => {
        if (playerSelection === computerSelection) {
            return "Tie"
        }
        else if (playerSelection === options[0] && computerSelection === options[2]) {
            return "Player wins"
        }
        else if (playerSelection === options[1] && computerSelection === options[0]) {
            return "Player wins"
        }
        else if (playerSelection === options[2] && computerSelection === options[1]) {
            return "Player wins"
        }
        else {
            return "Computer wins"
        }
    }

    const game = () => {
        let playerScore = 0,
            computerScore = 0;

        for (let i = 0; i < 5; i++) {
            let choice = prompt('Rock, Paper or Scissors?').toLowerCase(),
                result = playRound(humanPlay(choice), computerPlay());

            if (result === "Player wins") {
                console.log(result);
                playerScore++;
            }
            else if (result == "Tie") {
                console.log(result);
            }
            else {
                console.log(result);
                computerScore++;
            }

            console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
        }
    }

    game()
})()