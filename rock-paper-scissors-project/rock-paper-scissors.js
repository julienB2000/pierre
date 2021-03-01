let playerScore = 0;
let computerScore = 0;
let finalText = '';
let roundNumber = document.getElementById("round_select").value
console.log(roundNumber)
let actualRound = 0;
let score = 0;
let iascore = 0;
let total = 0;



function randomizeValue(smallestValue, biggestValue) {
    // biggestValue exclude from possibilities
    let randomValue = Math.random() * (biggestValue - smallestValue);
    randomValue = Math.floor(randomValue) + smallestValue;
    return randomValue;
}

function computerPlay() {
    let randomValue = randomizeValue(0, 3);
    switch (randomValue) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        document.body.style.backgroundColor = 'green';
        score++;
        return 'You Won the round! Rock beats scissors';
    }
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        document.body.style.backgroundColor = 'red';
        iascore++;
        return 'You Lost the game! Paper beats rock';
    }
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        document.body.style.backgroundColor = 'blue';
        return 'Draw !!! REMATCH';
    }
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        document.body.style.backgroundColor = 'green';
        score++;
        return 'You Won the round! Rock beats scissors';
    }
    if (playerSelection === 'paper' && computerSelection === 'scissors') {
        document.body.style.backgroundColor = 'red';
        iascore++;
        return 'You Lost the round! Paper beats rock';
    }
    if (playerSelection === 'paper' && computerSelection === 'paper') {
        document.body.style.backgroundColor = 'blue';
        return 'Draw !!! REMATCH';
    }
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        document.body.style.backgroundColor = 'green';
        score++;
        return 'You Won the round! Rock beats scissors';
    }
    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        document.body.style.backgroundColor = 'red';
        iascore++;
        return 'You Lost the round! Paper beats rock';
    }
    if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        document.body.style.backgroundColor = 'blue';
        return 'Draw !!! REMATCH';
    }
}



window.addEventListener('click', function (e) {
    const paraFinalScore = document.getElementById('para-final-score');
    paraFinalScore.textContent = '';
    let targetElement = e.target || e.srcElement;
    let elementValue = targetElement.getAttribute('value');

    if (elementValue == null) return;
    let displayText = playRound(elementValue, computerPlay());
    const paraRoundScore = document.getElementById('para-round-score');
    paraRoundScore.textContent = displayText;
    if (displayText === 'You Won! Rock beats scissors') playerScore += 1;
    else if (displayText === 'You Lost! Paper beats rock') computerScore += 1;
    actualRound++;
    if (actualRound >= roundNumber) {
        if (playerScore > computerScore) {
            finalText = 'You won! good player';
            total++;
        } else if (playerScore < computerScore) {
            finalText = 'You lost! IA won';
        } else {
            finalText = 'Draw Rematch';
        }
        const paraFinalScore = document.getElementById('para-final-score');
        paraFinalScore.textContent = finalText;
        actualRound = 0;
        score = 0;
        iascore = 0;
        finalText = '';
    }
    document.getElementById("score").textContent = score + " : " + iascore
    document.getElementById("total").textContent = "Total Win : " + total
});
