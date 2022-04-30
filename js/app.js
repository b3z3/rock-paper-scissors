(function () {
    const options = ['rock', 'paper', 'scissors'];

    const computerPlay = () => options[Math.round(Math.random() * 2)];

    let playerScore = 0,
        computerScore = 0;

    const playRound = (playerSelection, computerSelection) => {
        if (playerScore === 5 || computerScore === 5) {
            return;
        }
        if (playerSelection === computerSelection) {
            return "Tie";
        }
        else if (playerSelection === options[0] && computerSelection === options[2]) {
            return "Player wins";
        }
        else if (playerSelection === options[1] && computerSelection === options[0]) {
            return "Player wins";
        }
        else if (playerSelection === options[2] && computerSelection === options[1]) {
            return "Player wins";
        }
        else {
            return "Computer wins";
        }
    }

    const matchResult = document.querySelector('.match-result > p'),
        playerScoreDisplay = document.getElementById('player-span'),
        computerScoreDisplay = document.getElementById('computer-span');

    const displayResult = (result) => {
        if (result === "Tie") {
            matchResult.textContent = "It's a tie!";
        }
        else if (result === "Player wins") {
            matchResult.textContent = "You win!";
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
        }
        else if (result === "Computer wins") {
            matchResult.textContent = "You lose!";
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }
        playerScore === 5 ? matchResult.textContent = "Winner: You!" :
            computerScore === 5 ? matchResult.textContent = "Winner: Computer!" : null;
    }

    const rock = document.getElementById("rock"),
        paper = document.getElementById("paper"),
        scissors = document.getElementById("scissors");

    rock.addEventListener('click', () => {
        let result = playRound("rock", computerPlay());
        displayResult(result);
    });

    paper.addEventListener('click', () => {
        let result = playRound("paper", computerPlay());
        displayResult(result);
    });

    scissors.addEventListener('click', () => {
        let result = playRound("scissors", computerPlay());
        displayResult(result);
    });
})()