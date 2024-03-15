let choices = document.querySelectorAll(".choice");
let user_score = document.getElementById("user-score");
let comp_score = document.getElementById("comp-score");
let msg = document.getElementById("msg");

let userScore = 0;
let compScore = 0;

function playGame(userChoice) {
    console.log("user-choice", userChoice);
    let compchoice = genCompchoice();
    console.log("comp-choice", compchoice);

    if (userChoice === compchoice) {
        drawGame();
        console.log("draw game");
    }
    else {
        let userWin = true
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compchoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compchoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compchoice)
    }
};

function drawGame() {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

function showWinner(userWin, userChoice, compchoice) {
    if (userWin) {
        userScore++;
        user_score.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        comp_score.innerText = compScore;
        msg.innerText = `You lost. ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

function genCompchoice() {
    let index = (Math.floor(Math.random() * 3));
    let rndm = choices[index].id;
    return rndm
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})